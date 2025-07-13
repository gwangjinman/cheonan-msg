import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type CourseCardProps = {
    title: string;
    course: {
        [key: string]: string;
    };
};

export default function CourseCard({
    title,
    course,
}: CourseCardProps) {
    return (
        <Card
            className="bg-indigo-300 py-6 px-4 border-none">
            <CardHeader>
                <CardTitle
                    className="text-2xl text-white font-bold text-center">
                    {title} 코스
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col items-center gap-6">
                    {Object.entries(course).map(([courseName, price]) => (
                        <div key={courseName}
                            className="flex items-center text-lg gap-2
                        text-gray-700 font-bold">
                            <div>
                                {courseName}
                            </div>
                            <div>
                                <ArrowRight
                                    className="h-4 w-4" />
                            </div>
                            <div className="text-blue-600">
                                {price}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>

            <CardFooter>
                <Button
                    className="grow"
                    asChild>
                    <a href="tel:+821021832567">
                        예약하기
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}