import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const CreateMessageButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="mt-2" disabled={pending}>
      {pending && <Loader2 className="animate-spin mr-2" />}
      Create message
    </Button>
  );
};

export default CreateMessageButton;
