import Image from "next/image";
import profilePic from "@/public/me.jpg";

export function Aside() {
    return (
        <div className="tw-flex tw-flex-wrap">
            <Image src={profilePic} alt="My photograph" width={246} height={328}/>
            <div className="tw-w-[246px]">
                Intro
            </div>
            <div className="tw-w-[246px]">
                contacts
            </div>
        </div>
    );
}