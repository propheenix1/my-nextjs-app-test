import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <div className="h-[315px] overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Description of image"
          layout="fill" // ใช้ fill เพื่อให้ภาพขยายเต็มพื้นที่ของ div
          objectFit="cover" // ปรับภาพให้เต็มพื้นที่ของ div โดยการครอบตัด
          priority // ใช้ priority เพื่อให้โหลดภาพนี้ก่อน
        />
      </div>
      <div className="bg-white p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            How to position your furniture for positivity
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </article>
  );
}
