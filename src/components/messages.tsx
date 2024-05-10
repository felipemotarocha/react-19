import { useActionState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";

const Messages = () => {
  const [messages, createMessage, isLoading] = useActionState(
    async (previousState: string[], formData: FormData) => {
      const message = formData.get("message") as string;
      // call an API to create the message
      // sleep for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return [...previousState, message];
    },
    []
  );

  return (
    <div>
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
          {messages.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Messages;
