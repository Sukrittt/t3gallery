import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/842d041c-3135-4c9b-ba05-91c6f54186db-n4bw74.png",
  "https://utfs.io/f/92b79c5b-1ab3-48e7-87fb-34c31da5a210-n4ffwn.png",
  "https://utfs.io/f/fc3eb535-e5a8-488d-b00f-d522e8636f28-pd7q63.png",
  "https://utfs.io/f/bbada943-0f93-466f-bd2e-7eb353a95679-xvcau3.png",
  "https://utfs.io/f/a906d0fd-570f-496d-86ee-f2a277a3dc4f-i2rh05.png",
];

const mockImages = mockUrls.map((url, index) => ({
  url,
  id: index + 1,
}));

export default function HomePage() {
  return (
    <div className="flex flex-wrap gap-4">
      {mockImages.map((image) => (
        <div key={image.id} className="relative h-48 w-48 p-4">
          <Image
            src={image.url}
            alt="random-images"
            className="h-auto w-full"
            fill
          />
        </div>
      ))}
    </div>
  );
}
