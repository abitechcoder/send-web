import { search } from "@/src/assets";
import {
  PhotoCard,
  AddGallery,
  SelectedGalleryView,
  NavHeader,
} from "@/src/components";
import { getAllGallery } from "@/src/data";
import styles from "@/src/styles";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GalleryPropsType } from "@/src/types";

export async function loader() {
  const gallery = await getAllGallery();
  return { gallery };
}

const Gallery = () => {
  const { gallery }: any = useLoaderData();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const [filteredGallery, setFilteredGallery] = useState([]);

  useEffect(() => {
    const filtered = gallery.filter((gallery: GalleryPropsType) =>
      gallery.title.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setFilteredGallery(filtered);
  }, [searchText]);

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[180px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="Gallery" />
        <div className="flex gap-8 py-4">
          <div className="flex items-center border-[1px] py-3 px-5 bg-[#D8DDE4] justify-between rounded-xl w-1/2">
            <input
              type="text"
              placeholder="Search gallery item"
              onChange={(e) => setSearchText(e.target.value)}
              className={`${styles.paragraph4} text-[#849299] bg-transparent outline-0 flex-1`}
            />
            <img src={search} className="w-5 h-5" />
          </div>
          <AddGallery />
        </div>
      </div>

      <div className="p-3 lg:px-8 lg:py-4 overflow-y-auto grid grid-cols-[1fr_300px] gap-8">
        <div className="bg-white p-4">
          {gallery.length > 0 ? (
            <div className="grid grid-cols-3 gap-5">
              {searchText
                ? filteredGallery?.map((item: GalleryPropsType) => (
                    <div
                      key={gallery.id}
                      onClick={() => setSelectedItem(item)}
                      className="cursor-pointer"
                    >
                      <PhotoCard
                        title="Gallery"
                        subtitle={item.title}
                        image={item.image}
                      />
                    </div>
                  ))
                : gallery?.map((item: GalleryPropsType) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="cursor-pointer"
                    >
                      <PhotoCard
                        title="Gallery"
                        subtitle={item.title}
                        image={item.image}
                      />
                    </div>
                  ))}
            </div>
          ) : (
            <div className="bg-gray-200 grid place-items-center p-8">
              <p className="font-bold mb-3">No gallery item found</p>
              <p>
                Click on <strong>add gallery button</strong> above to create a
                gallery item
              </p>
            </div>
          )}
        </div>

        <div className="w-full">
          <SelectedGalleryView
            item={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
