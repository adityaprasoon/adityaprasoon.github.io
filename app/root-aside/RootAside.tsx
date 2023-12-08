import Image from "next/image";
import profilePic from "@/public/me.jpg";

export function RootAside() {
    return (
        <div className="tw-flex tw-flex-wrap">
            <Image src={profilePic} width={246} height={328}/>
            <div className="tw-w-[246px]">
                Intro
            </div>
            <div className="tw-w-[246px]">
                contacts
            </div>
        </div>
    );
}