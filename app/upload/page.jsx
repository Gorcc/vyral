"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

// Initialize Supabase client
const supabase = createClient();

const Page = () => {


  const [userData, setUserData] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }
      setUserData(data.user);
    }
    getData();
  }, []);

  console.log(userData);

  const handleVideoChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setVideoFile(selectedFile);
  };

  const handleThumbnailChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setThumbnailFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!videoFile || !thumbnailFile) {
      alert("Please select both a video and a thumbnail to upload.");
      return;
    }

    setUploading(true);

    try {
      const { data: user, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        throw new Error("Failed to fetch user information.");
      }

      const { data: videoData, error: videoError } = await supabase.storage
        .from("videos")
        .upload(`videos/${videoFile.name}`, videoFile, { upsert: true });

      if (videoError) {
        throw videoError;
      }

      const { data: thumbnailData, error: thumbnailError } = await supabase.storage
        .from("videos")
        .upload(`thumbnails/${thumbnailFile.name}`, thumbnailFile, { upsert: true });

      if (thumbnailError) {
        throw thumbnailError;
      }

      const videoUrl = `https://rigidgsbhjfuhyshxjvv.supabase.co/storage/v1/object/public/videos/videos/${videoFile.name}`;
      const thumbnailUrl = `https://rigidgsbhjfuhyshxjvv.supabase.co/storage/v1/object/public/videos/thumbnails/${thumbnailFile.name}`;

      const { data: dbData, error: dbError } = await supabase.from("thumbnails").insert([
        {
          sender_mail: userData?.email,
          img: thumbnailUrl,
        },
      ]);

      if (dbError) {
        throw dbError;
      }

      alert("Video and thumbnail uploaded successfully!");
      console.log("Uploaded video data:", videoData);
      console.log("Uploaded thumbnail data:", thumbnailData);
      console.log("Inserted database data:", dbData);
    } catch (error) {
      console.error("Error uploading video or thumbnail:", error);
      alert("Failed to upload video and thumbnail.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload Video and Thumbnail</h1>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <input type="file" accept="image/*" onChange={handleThumbnailChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default Page;
