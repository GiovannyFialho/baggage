"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useMediaQuery } from "@/hooks/use-media-query";

import { cn } from "@/lib/utils";

import { Bag } from "@/app/entities/Bag";
import { addBag } from "../app/api";

type FormFields = Omit<Bag, "id">;

const FormFieldsSchema = z.object({
  thumb: z.string().includes("portaldasmalas.com.br"),
  name: z.string().min(3, "Name is required"),
  description: z.string().optional(),
  price: z.string().min(3, "Price is required")
});

export function BaggageForm() {
  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add new Bag</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add new Bag</DialogTitle>

            <DialogDescription>
              Adding a new bag to our database.
            </DialogDescription>
          </DialogHeader>

          <ProfileForm onComplete={(value) => setOpen(value)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add new Bag</Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add new Bag</DrawerTitle>
          <DrawerDescription>
            Adding a new bag to our database.
          </DrawerDescription>
        </DrawerHeader>

        <ProfileForm className="px-4" onComplete={(value) => setOpen(value)} />

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

type ProfileFormProps = {
  className?: string;
  onComplete: (isSubmitted: boolean) => void;
};

function ProfileForm({ className, onComplete }: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitted }
  } = useForm<FormFields>({
    resolver: zodResolver(FormFieldsSchema)
  });

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (data: FormFields) => addBag(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bags"]
      });
    },
    onError: () => {
      return "Deu merda!";
    }
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await mutateAsync(data);
    } catch (e) {
      setError("root", { message: `Error on form, ${e}` });
    }

    onComplete(isSubmitted);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          {...register("name")}
          type="text"
          id="name"
          placeholder="MX travel"
        />

        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="thumb">Image</Label>
        <Input {...register("thumb")} id="thumb" placeholder="URL image" />

        {errors.thumb && <p className="text-red-600">{errors.thumb.message}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input
          {...register("description")}
          id="description"
          placeholder="Bag's description"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="price">Price</Label>
        <Input {...register("price")} id="price" placeholder="$50" />

        {errors.price && <p className="text-red-600">{errors.price.message}</p>}
      </div>

      <Button type="submit">
        {isSubmitting ? (
          <TailSpin color="#fff" width="30" height="30" />
        ) : (
          `Save changes`
        )}
      </Button>

      {errors.root && <p className="text-red-600">{errors.root.message}</p>}
    </form>
  );
}
