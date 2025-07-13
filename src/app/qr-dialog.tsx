import { Button } from "../components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";
import Image from "next/image";

export default function QRDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger
                    asChild>
                    <Button
                        className="p-6 bg-blue-800 rounded-lg
                            hover:bg-blue-700 transition-colors
                            cursor-pointer">
                        카톡 아이디: opoo111
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-black">
                    <DialogHeader>
                        <DialogTitle
                        className="text-white text-center">
                            QR코드를 스캔하여 카카오톡 친구추가
                        </DialogTitle>
                        <DialogDescription
                        className="text-white text-center">
                            아래 QR코드를 카카오톡에서 스캔하세요.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center justify-center py-4">
                        <Image
                            src="/qr.png"
                            width={300}
                            height={300}
                            alt="카카오톡 QR코드"
                            className="rounded-lg
                                    border-2 border-gray-700 bg-black"
                        />
                    </div>
                    <DialogFooter>
                        <DialogClose
                        asChild>
                            <Button
                            variant="outline"
                            className="w-20">
                                닫기
                                </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
