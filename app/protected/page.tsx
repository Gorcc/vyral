import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Videocart from "@/components/Videocart";
import  Sidebar  from "@/components/side-bar";
import "../../public/styles/main.scss"

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error } = await supabase.storage
    .from("videos")
    .list("videos", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error("Error fetching videos:", error);
    return <div>Failed to load videos</div>;
  }

  // Map videos to include URLs
  const videoData = data.map((file) => ({
    name: file.name,
    url: `https://rigidgsbhjfuhyshxjvv.supabase.co/storage/v1/object/public/videos/videos/${file.name}`,
    thumbnail: `https://rigidgsbhjfuhyshxjvv.supabase.co/storage/v1/object/public/videos/thumbnails/catvid.jpg`, // Placeholder, update if you have separate thumbnails
  }));

  return (
    <>
    <Sidebar/>
    <div className="main-items flex-1 w-full flex flex-col gap-12">
      
      {videoData.length > 0 ? (
        <div className="video-grid">
          {videoData.map((video) => (
            <Videocart key={video.name} video={video} />
          ))}
        </div>
      ) : (
        <p>No videos found</p>
      )}
    </div>
    </>
  );
}
