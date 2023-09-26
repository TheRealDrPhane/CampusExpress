"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({  
    destination: "",
    location: "",
    roomNumber: "",
    phoneNumber: "",
    orderType: "",
    price: "",
    note: "",
    tag: "", });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Running 1")
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          destination: post.destination,
          location: post.location,
          roomNumber: post.roomNumber,
          phoneNumber:post.phoneNumber,
          orderType: post.orderType,
          price: post.price,
          note: post.note,
          tag: post.tag,
        }),
      });
      console.log("Running 2")
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};
console.log("Running 3")
export default CreatePrompt;
