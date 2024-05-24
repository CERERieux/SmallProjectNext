"use client";
import UncontrolledInput from "../ui/UncontrolledInput";
import LabelForm from "../ui/LabelForm";
import TitleInput from "../ui/TitleInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function FilterCommentForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilterComment = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const valueComment = e.target.value;
      const params = new URLSearchParams(searchParams);
      if (valueComment) params.set("comment", valueComment);
      else {
        params.set("comment", "");
        // params.delete("comment");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );
  const handleFilterAnswer = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const valueAnswer = e.target.value;
      const params = new URLSearchParams(searchParams);
      if (valueAnswer) params.set("answer", valueAnswer);
      else {
        params.set("answer", "");
        // params.delete("answer");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );
  const handleFilterAuthor = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const valueAuthor = e.target.value;
      const params = new URLSearchParams(searchParams);
      if (valueAuthor) params.set("author", valueAuthor);
      else {
        params.set("author", "");
        // params.delete("author")
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );

  return (
    <div className="flex w-full flex-col items-center justify-around gap-8 [&_span]:md:w-1/5">
      <LabelForm>
        <TitleInput firstColor="text-sm first-letter:text-sky-300">
          Comment:
        </TitleInput>
        <UncontrolledInput
          lineStyle
          name="CommentInputFilter"
          type="text"
          autoComplete="off"
          extraStyles="text-sm"
          defaultValue={searchParams.get("comment")?.toString()}
          onChange={handleFilterComment}
        />
      </LabelForm>
      <LabelForm>
        <TitleInput firstColor="text-sm first-letter:text-sky-300 text-right">
          Answer:
        </TitleInput>
        <UncontrolledInput
          lineStyle
          name="CommentInputFilter"
          type="text"
          autoComplete="off"
          extraStyles="text-sm"
          defaultValue={searchParams.get("answer")?.toString()}
          onChange={handleFilterAnswer}
        />
      </LabelForm>
      <LabelForm>
        <TitleInput firstColor="text-sm first-letter:text-sky-300 text-right">
          Author:
        </TitleInput>
        <UncontrolledInput
          lineStyle
          name="CommentInputFilter"
          type="text"
          autoComplete="off"
          extraStyles="text-sm"
          defaultValue={searchParams.get("author")?.toString()}
          onChange={handleFilterAuthor}
        />
      </LabelForm>
    </div>
  );
}
