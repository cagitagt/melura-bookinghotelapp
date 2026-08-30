import { Metadata } from "next";
import HeaderSection from "@/components/HeaderSection";
import { Suspense } from "react";
import Main from "@/components/Main";
import RoomSkeleton from "@/components/skeletons/room-skeleton";

export const metadata:Metadata = {
    title: "Rooms & Rates",
    description: "Choose your best room today"
}

const RoomPage = () => {
  return (
    <div className="">
        <HeaderSection title="Rooms" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aspernatur."/>
        <div className="mt-10 px-4">
            <Suspense fallback={<RoomSkeleton/>}>
                <Main/>
            </Suspense>
        </div>
    </div>
  )
}

export default RoomPage