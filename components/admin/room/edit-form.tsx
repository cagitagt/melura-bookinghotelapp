"use client";

import { useRef, useState, useTransition } from "react";
import { useActionState } from "react";
import { type PutBlobResult } from "@vercel/blob";
import { updateRoom } from "@/lib/action";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { BarLoader } from "react-spinners";
import { Amenities } from "@/app/generated/prisma/client";
import { RoomProps } from "@/types/room"; 
import Image from "next/image";
import clsx from "clsx";

const EditForm = ({ amenities,room }: { amenities: Amenities[]; room: RoomProps }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(room.image);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  const handleUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);

    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.status !== 200) {
          setMessage(data.message);
        }
        const img = data as PutBlobResult;
        setImage(img.url);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api.upload/?imageUrl=${image}`, {
          method: "DELETE",
        });
        setImage("");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const [state, formAction, isPending] = useActionState(
    updateRoom.bind(null, image, room.id),
    null,
  );

  const checkedAmenities = room.RoomAmenities.map((item) => item.amenitiesId)

  return (
    <form action={formAction}>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-white rounded-xl border border-taupe-100 p-4">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              defaultValue={room.name}
              className="py-2 px-3 text-sm rounded-full border border-taupe-200 w-full text-taupe-800 placeholder:text-taupe-400 focus:outline-none focus:border-taupe-500 transition-colors duration-200"
              placeholder="Room Name"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-xs text-red-500 mt-1 block">
                {state?.error?.name}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <input
                type="text"
                name="capacity"
                defaultValue={room.capacity}
                className="py-2 px-3 text-sm rounded-full border border-taupe-200 w-full text-taupe-800 placeholder:text-taupe-400 focus:outline-none focus:border-taupe-500 transition-colors duration-200"
                placeholder="Capacity"
              />
              <div aria-live="polite" aria-atomic="true">
                <span className="text-xs text-red-500 mt-1 block">
                  {state?.error?.capacity}
                </span>
              </div>
            </div>
            <div>
              <input
                type="text"
                name="price"
                defaultValue={room.price}
                className="py-2 px-3 text-sm rounded-full border border-taupe-200 w-full text-taupe-800 placeholder:text-taupe-400 focus:outline-none focus:border-taupe-500 transition-colors duration-200"
                placeholder="Price"
              />
              <div aria-live="polite" aria-atomic="true">
                <span className="text-xs text-red-500 mt-1 block">
                  {state?.error?.price}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <textarea
              name="description"
              rows={4}
              defaultValue={room.description}
              className="py-2 px-3 text-sm rounded-xl border border-taupe-200 w-full text-taupe-800 placeholder:text-taupe-400 focus:outline-none focus:border-taupe-500 transition-colors duration-200 resize-none"
              placeholder="Description"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-xs text-red-500 mt-1 block">
                {state?.error?.description}
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-taupe-400 mb-2">
              Amenities
            </p>
            <div className="grid grid-cols-3 gap-y-1.5">
              {amenities.map((item) => (
                <div className="flex items-center" key={item.id}>
                  <input
                    type="checkbox"
                    name="amenities"
                    defaultValue={item.id}
                    defaultChecked={checkedAmenities.includes(item.id)}
                    className="w-3.5 h-3.5 text-taupe-700 bg-taupe-50 border-taupe-300 rounded focus:ring-taupe-400"
                  />
                  <label className="ms-1.5 text-sm font-medium text-taupe-700 capitalize">
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-xs text-red-500 mt-1 block">
                {state?.error?.amenities}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-taupe-100 p-4 flex flex-col">
          <label
            htmlFor="input-file"
            className="flex flex-col mb-3 items-center justify-center aspect-square border-2 border-taupe-200 border-dashed rounded-xl cursor-pointer bg-taupe-50 relative overflow-hidden hover:border-taupe-400 transition-colors duration-200"
          >
            <div className="flex flex-col items-center justify-center text-taupe-500 px-3 z-10">
              {pending ? <BarLoader /> : null}
              {image ? (
                <button
                  type="button"
                  onClick={() => deleteImage(image)}
                  className="flex items-center justify-center bg-black/40 backdrop-blur-sm size-7 rounded-full absolute right-2 top-2 text-white hover:bg-red-500 transition-colors duration-200"
                >
                  <IoTrashOutline className="size-3.5" />
                </button>
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <IoCloudUploadOutline className="size-6" />
                  <p className="mb-1 text-xs font-medium">Select Image</p>
                  {message ? (
                    <p className="text-xs text-red-500">{message}</p>
                  ) : (
                    <p className="text-xs text-taupe-400">Max 4MB</p>
                  )}
                </div>
              )}
            </div>
            {!image ? (
              <input
                type="file"
                ref={inputFileRef}
                onChange={handleUpload}
                id="input-file"
                className="hidden"
              />
            ) : (
              <Image
                src={image}
                alt="iamge"
                fill
                className="rounded-xl object-cover"
              />
            )}
          </label>

          {state?.message ? (
            <div className="mb-3 bg-red-50 border border-red-200 rounded-lg p-2">
              <span className="text-xs text-red-600">{state.message}</span>
            </div>
          ) : null}

          <button
            type="submit"
            className={clsx(
              "bg-taupe-800 hover:bg-taupe-700 text-taupe-50 w-full py-2.5 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer mt-auto",
              {
                "opacity-50 cursor-progress": isPending,
              },
            )}
            disabled={isPending}
          >
            {isPending ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;