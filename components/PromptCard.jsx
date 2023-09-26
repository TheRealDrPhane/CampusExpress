"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import { formatDistanceToNow } from "date-fns";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  function timeAgo(timestamp) {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  }

  const timestamp = new Date();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div class="prompt_card">
      <div class="px-5 pb-4 pt-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-3xl font-bold overflow-ellipsis max-w-[180px] break-words text-gray-900 dark:text-white">
              {post.destination}
            </p>
            <p class="text-xl font-bold overflow-ellipsis max-w-[180px] break-words text-gray-900 dark:text-white">
              {post.orderType}
            </p>
            <p class="text-sm font-light text-gray-900 dark:text-white">
              {timeAgo(timestamp)}
            </p>
          </div>
          <div onClick={handleProfileClick}>
            <div class="text-right">
              <div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-100">
                <Image
                  src={post.creator?.image}
                  alt="user_image"
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                />
              </div>
              <p class="text-sm font-light pt-1 text-gray-900 dark:text-white">
                {post.creator?.username}
              </p>
              <p class="text-sm font-light  text-gray-900 dark:text-white">
                {post.phoneNumber}
              </p>
            </div>
          </div>
        </div>
        <p class="text-md font-medium pt-5 break-words text-gray-900 overflow-ellipsis dark:text-white">
          {post.note}
        </p>
        <div class="flex pt-5 items-center justify-between">
          <div>
            <p class="text-xl font-bold overflow-ellipsis max-w-[180px] break-words text-gray-900 dark:text-white">
              {post.location}
            </p>
            <p class="text-xl font-light text-gray-900 dark:text-white">
              {post.roomNumber}
            </p>
          </div>
          <div>
            <p class="text-3xl font-boldoverflow-ellipsis max-w-[110px] break-words text-gray-900 dark:text-white">
              ₦{post.price}
            </p>
          </div>
        </div>
        <p onClick={() => handleTagClick && handleTagClick(post.tag)} class="text-sm font-light pt-5 text-gray-900 dark:text-white">
          #{post.tag}
        </p>
        {session?.user.id === post.creator?._id && pathName === "/profile" && (
        <div className='mt-2 flex-center gap-4 border-t border-[#291860] pt-3'>
          <p
            className='font-roboto text-sm text-green-500 cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-roboto text-sm  text-red-500 cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default PromptCard;
