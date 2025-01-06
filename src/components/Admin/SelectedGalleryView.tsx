import { gallery } from "@/src/assets";
import styles from "@/src/styles";
import { GalleryPropsType } from "@/src/types";
import { DeleteItemButton, EditGallery } from "..";
import React, { useEffect, useState } from "react";
import { deleteGallery } from "@/src/data";

const SelectedGalleryView = ({
  item,
  setSelectedItem,
}: {
  item: GalleryPropsType;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<null | GalleryPropsType>
  >;
}) => {
  const [photos, setPhotos] = useState<any>("");
  useEffect(() => {
    if (!item?.photos) {
      setPhotos("");
      return;
    }
    const parsedPhotos = JSON.parse(item?.photos);
    setPhotos(parsedPhotos);
  }, [item]);
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {item ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Detail Report</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Title</h5>
            <p>{item?.title}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Image</h5>
            <img
              src={item?.image}
              alt=""
              className="h-[100px] w-[100px] object-contain object-center"
            />
          </div>

          {!!photos && (
            <div className="w-full">
              <h5 className="text-sm font-light text-gray-400 mb-2">Photos</h5>
              <div className="grid gap-4 grid-cols-2">
                {photos?.map((photo: string, index: any) => (
                  <img
                    key={index}
                    src={photo}
                    alt=""
                    className="h-[100px] w-full object-contain object-center"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <DeleteItemButton
              itemId={item.id}
              handleSelectedItem={setSelectedItem}
              itemType="Gallery Item"
              navigateTo="/admin/gallery"
              deleteItem={deleteGallery}
            />
            <EditGallery item={item} setSelectedItem={setSelectedItem} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select a gallery item to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedGalleryView;
