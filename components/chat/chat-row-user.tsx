import { chatRole } from "@/features/chat/chat-service";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Typography from "../typography";
import { Avatar, AvatarImage } from "../ui/avatar";

interface ChatRowProps {
  name: string;
  profilePicture: string;
  message: string;
  type: chatRole;
}

const ChatRow: FC<ChatRowProps> = (props) => {
  return (
    <div
      className={cn(
        "border-b ",
        props.type === "assistant" ? "bg-primary/5" : ""
      )}
    >
      <div className="container mx-auto max-w-4xl py-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src={props.profilePicture} />
            </Avatar>
            <Typography variant="h5" className="capitalize">
              {props.name}
            </Typography>
          </div>
        </div>
        <div className="py-6">
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
          {props.message}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ChatRow;
