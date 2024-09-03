import { CgMail } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa";
import { TbUser } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { Input } from "@/components/ui/input";

import { MdSearch } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="h-fit w-full    text-white">
      <div className="h-fit w-full   bg-[#7E33E0]  flex justify-center ">
        <div className="flex w-full h-fit container  p-3  justify-between">
          <div className="flex  gap-2">
            <div className=" flex justify-center gap-16">
              <p className="font-semibold  leading-4 flex items-center gap-2">
                <CgMail />
                info@ecommerce.mn
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneVolume />
                77123456
              </p>
            </div>
          </div>
          <div className="flex   ">
            <div className="flex gap-6 items-center ">
              <p className="flex items-center gap-2">
                Нэвтрэх <TbUser />
              </p>
              <p className="flex items-center gap-2">
                Хадгалах <CiHeart />
              </p>
              <span>
                <AiOutlineShoppingCart />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  text-black mt-4 flex justify-center ">
        <div className="flex   container   justify-between ">
          <div className="  flex ">
            <div className="flex justify-center gap-6">
              <div className="font-bold  leading-10 text-3xl  flex">
                Ecommerce
              </div>
              <p className="flex text-[#FB2E86] justify-center items-center m-auto">
                Нүүр <BsChevronDown />
              </p>
              <p className="flex items-center">Ангилал</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <div className="flex">
                <Input className="w-[300px]" />
                <p className="p-2 bg-[#FB2E86] rounded-lg flex justify-center items-center">
                  <MdSearch />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
