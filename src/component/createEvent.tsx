import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { format } from "date-fns";

export default function CreateEvent() {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [passwordRequired, setPasswordRequired] = useState("No");



    return (
        <section className=" p-4 overflow-auto w-full h-fit bg-white flex justify-center items-center">
        <div className=" p-4  md:w-[700px] border rounded-lg shadow-sm bg-white">

            <div className=" bg-gray-200  rounded-lg flex items-center justify-center h-40 mb-4 cursor-pointer">
                <img src="/public/icon/UPLOADiCON.png" alt="upload Icon" />
                <span className="text-gray-900"> Add image</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Event Title<span className="text-red-500">*</span></label>
                    <Input placeholder="CONFIG 2025 PHC" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Event Category<span className="text-red-500">*</span></label>
                    <Input placeholder="Choose event category" />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea placeholder="CONFIG 2025 PHC" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Start date<span className="text-red-500">*</span></label>
                    <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        className="rounded-md border"
                    />
                    <div className="mt-1 text-xs text-gray-500">
                        {startDate ? format(startDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">End date<span className="text-red-500">*</span></label>
                    <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        className="rounded-md border"
                    />
                    <div className="mt-1 text-xs text-gray-500">
                        {endDate ? format(endDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Start time</label>
                    <Input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">End time</label>
                    <Input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Would participants require password to join the event?
                </label>
                <RadioGroup
                    defaultValue="No"
                    onValueChange={setPasswordRequired}
                    className="flex space-x-4 mt-1"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Yes" id="yes" />
                        <label htmlFor="yes" className="text-sm">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="No" id="no" />
                        <label htmlFor="no" className="text-sm">No</label>
                    </div>
                </RadioGroup>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Publish Event</Button>
                <Button className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Save Event</Button>
            </div>
        </div>
        </section>
    );
}
