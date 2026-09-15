import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

async function sendMessage(data: ContactFormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(data);
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const sendMessageMutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      toast.success("Message sent successfully!");
    },
    onError: () => {
      toast.error("Failed to send message.");
    },
  });

  function onSubmit(data: ContactFormData) {
    console.log(data);
    sendMessageMutation.mutate(data);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 mx-auto flex flex-col items-center text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Get in touch
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact Me
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Have a project or opportunity in mind? Feel free to send me a message.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Let's work together
          </h3>

          <p className="mt-4 leading-7 text-muted-foreground">
            I'm interested in junior and internship opportunities, freelance
            projects and web development roles.
          </p>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              <span className="text-foreground">Email:</span>{" "}
              your.email@example.com
            </p>

            <p>
              <span className="text-foreground">GitHub:</span>{" "}
              github.com/yourusername
            </p>

            <p>
              <span className="text-foreground">Location:</span> Tashkent,
              Uzbekistan
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring"
              placeholder="Your name"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring"
              placeholder="you@example.com"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Message
            </label>

            <textarea
              id="message"
              rows={6}
              {...register("message")}
              className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring"
              placeholder="Your message..."
            />

            {errors.message && (
              <p className="mt-2 text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={sendMessageMutation.isPending}
            className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {sendMessageMutation.isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
