import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { format } from "date-fns";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../components/ui/popover"

export default function CreateEvent() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [passwordRequired, setPasswordRequired] = useState("No");



    return (
        <section className=" p-4 overflow-auto w-full h-fit bg-gray-100 flex justify-center items-center">
            <div className=" p-4  md:w-[700px] border rounded-lg shadow-sm bg-white">

                <div className=" bg-gray-100  rounded-lg flex items-center justify-center gap-3 h-40 mb-4 cursor-pointer">
                    <img src="./public/icon/UPLOADiCON.png" alt="upload Icon" />
                    <span className="text-gray-900"> Add image</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <div className="flex justify-between w-full  font-normal text-base mb-2">Event Title <span className="text-red-500">*</span></div>
                        <Input className="h-12 font-normal text-xl" placeholder="CONFIG 2025 PHC" />
                    </div>
                    <div>
                        <div className="flex justify-between w-full mb-2  font-normal text-base ">Event Category<span className="text-red-500">*</span></div>
                        <Input className="h-12 " placeholder="Choose event category" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block w-full mb-2  font-normal text-base ">Description</label>
                    <Textarea className="p-4 h-[101px]" placeholder="CONFIG 2025 PHC" />
                </div>

                <div className="flex flex-col justify-between md:flex-row  gap-4 mb-4">
                    <div className="w-1/2">
                        <label className="flex justify-between  w-full mb-2  font-normal text-base ">
                            Start date <span className="text-red-500">*</span>
                        </label>
                        <Popover>
                            <PopoverTrigger className="w-full h-12 ">
                                <div className="mt-1 p-2 border-2 rounded-md w-full font-normal flex justify-start  h-12 text-base text-gray-400 cursor-pointer">
                                    {startDate ? format(startDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                                </div>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar
                                    mode="single"
                                    selected={startDate}
                                    onSelect={setStartDate}
                                    className="rounded-md border bg-white"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="w-1/2" >
                        <label className="flex justify-between  w-full mb-2  font-normal text-base ">
                            End date <span className="text-red-500">*</span>
                        </label>
                        <Popover>
                            <PopoverTrigger className="w-full h-12 bg-white">
                                <div className="mt-1 p-2 border-2 rounded-md w-full font-normal flex justify-start  h-12 text-base text-gray-400 ursor-pointer">
                                    {endDate ? format(endDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                                </div>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar
                                    mode="single"
                                    selected={endDate}
                                    onSelect={setEndDate}
                                    className="rounded-md border bg-white"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="flex justify-between w-full mb-2  font-normal text-base ">Start time <span className="text-red-500">*</span></label>
                        <Input
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="w-full outline-none "
                        />
                    </div>

                    <div>
                        <label className="flex justify-between w-full mb-2  font-normal text-base ">End time  <span className="text-red-500">*</span></label>
                        <Input
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="w-full outline-none"
                        />
                    </div>
                </div>


                <div className="mb-4">
                    <label className="block font-normal text-base  mb-3">
                        Would participants require password to join the event?
                    </label>
                    <RadioGroup
                        defaultValue="No"
                        onValueChange={setPasswordRequired}
                        className="flex flex-col gap-3 mt-1"
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

                <div className="flex flex-col md:flex-row gap-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Publish Event</Button>
                    <Button className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Save Event</Button>
                </div>
            </div>
        </section>
    );
}
