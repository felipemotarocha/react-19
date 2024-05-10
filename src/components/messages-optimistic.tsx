import { use, useActionState, useOptimistic } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { ThemeContext } from "@/contexts/theme";

interface IMessage {
  content: string;
  isSending: boolean;
}

const MessagesOptimistic = () => {
  const { theme } = use(ThemeContext);

  const [messages, createMessage, isLoading] = useActionState<IMessage[]>(
    async (previousState: IMessage[], formData: FormData) => {
      try {
        const message = formData.get("message") as string;
        setOptimisticMessages((previousState) => [
          ...previousState,
          {
            content: message,
            isSending: true,
          },
        ]);

        await new Promise((resolve, reject) => setTimeout(resolve, 2000));

        return [
          ...previousState,
          {
            content: message,
            isSending: false,
          },
        ];
      } catch (error) {
        console.error(error);
        return previousState;
      }
    },
    []
  );

  const [optimisticMessages, setOptimisticMessages] = useOptimistic(messages);

  return (
    <div className={theme === "light" ? "bg-white p-10" : "bg-black p-10"}>
      <Card>
        <CardHeader>
          <CardTitle>Add a message</CardTitle>
        </CardHeader>

        <CardContent>
          <form action={createMessage}>
            <Input type="text" name="message" />

            <Button type="submit" className="mt-2" disabled={isLoading}>
              {isLoading && <Loader2 className="animate-spin mr-2" />}
              Create message
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>

        <CardContent>
          {optimisticMessages.map((message) => (
            <p
              key={message.content}
              className={message.isSending ? "text-gray-400" : ""}
            >
              {message.content}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagesOptimistic;
