"use client";

import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function CreateChatButton() {
  const router = useRouter();
  const createNewChat = async () => {
    router.push(`/chat/abc`);
  };
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon />
    </Button>
  );
}

export default CreateChatButton;
