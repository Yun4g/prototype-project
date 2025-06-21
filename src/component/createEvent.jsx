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
} from "../components/ui/popover";
import { useNavigate } from "react-router-dom";
import VideoSourceModal from "../components/ui/videoModal";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const [eventData, setEventData] = useState({
    title: "",
    category: "",
    description: "",
    startDate: null,
    endDate: null,
    startTime: "",
    endTime: "",
    passwordRequired: "No",
    imageUrl: null,
    imageFile: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventData((prev) => ({
        ...prev,
        imageUrl: URL.createObjectURL(file),
        imageFile: file, 
      }));
    }
  };

  const allFieldsFilled =
    eventData.title.trim() &&
    eventData.category.trim() &&
    eventData.startDate &&
    eventData.endDate &&
    eventData.startTime &&
    eventData.endTime &&
    eventData.imageUrl;

  const handleSubmit = () => {
    console.log("Send to backend:", eventData);
  };

  return (
    <section className="py-5 lg:p-24 overflow-auto w-full h-fit bg-gray-50 flex justify-center items-center">
      <div className="w-[90%] lg:w-[70%] lg:p-14 flex justify-center items-center relative">
        <button onClick={() => navigate("/")}>
          <img
            src="/public/arrowbackl.png"
            className="mb-4 absolute left-0 top-0"
            alt="back"
          />
        </button>

        <div className="p-4 my-6 lg:my-0 md:w-[700px] border rounded-lg shadow-sm bg-white">
          {/* IMAGE */}
          <label
            htmlFor="image-upload"
            className="bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2 h-40 cursor-pointer hover:bg-blue-50 transition"
          >
            {eventData.imageUrl ? (
              <img
                src={eventData.imageUrl}
                alt="Uploaded"
                className="object-cover h-full w-full rounded-lg"
              />
            ) : (
              <div className="flex items-center gap-3">
                <img src="/icon/UPLOADiCON.png" alt="Upload icon" />
                <span className="text-gray-600">Click to add image</span>
              </div>
            )}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className="hidden"
            onChange={handleImageChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 mb-4">
            <div>
              <label className="flex justify-between mb-2 font-normal text-base">
                Event Title <span className="text-red-500">*</span>
              </label>
              <Input
                value={eventData.title}
                onChange={(e) =>
                  setEventData((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="CONFIG 2025 PHC"
                className="h-12 border-2 border-gray-600 p-4 rounded-lg w-full"
              />
            </div>
            <div>
              <label className="flex justify-between mb-2 font-normal text-base">
                Event Category <span className="text-red-500">*</span>
              </label>
              <Input
                value={eventData.category}
                onChange={(e) =>
                  setEventData((prev) => ({ ...prev, category: e.target.value }))
                }
                placeholder="Choose event category"
                className="h-12 border-2 border-gray-600 p-4 rounded-lg w-full"
              />
            </div>
          </div>

          
          <div className="mb-4">
            <label className="block mb-2 font-normal text-base">Description</label>
            <Textarea
              value={eventData.description}
              onChange={(e) =>
                setEventData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="CONFIG 2025 PHC"
              className="p-4 h-[101px] border-gray-600 rounded-lg w-full"
            />
          </div>

          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="md:w-1/2">
              <label className="flex justify-between mb-2 font-normal text-base">
                Start date <span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger className="w-full h-12">
                  <div className="p-2 border-2 border-gray-600 flex justify-start rounded-md text-base text-gray-400 cursor-pointer">
                    {eventData.startDate
                      ? format(eventData.startDate, "dd/MM/yyyy")
                      : "DD/MM/YYYY"}
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={eventData.startDate}
                    onSelect={(date) =>
                      setEventData((prev) => ({ ...prev, startDate: date }))
                    }
                    className="rounded-md border bg-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="md:w-1/2">
              <label className="flex justify-between mb-2 font-normal text-base">
                End date <span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger className="w-full   h-12">
                  <div className="p-2 border-2 border-gray-600 rounded-md flex justify-start   text-base text-gray-400 cursor-pointer">
                    {eventData.endDate
                      ? format(eventData.endDate, "dd/MM/yyyy")
                      : "DD/MM/YYYY"}
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={eventData.endDate}
                    onSelect={(date) =>
                      setEventData((prev) => ({ ...prev, endDate: date }))
                    }
                    className="rounded-md border bg-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="flex justify-between mb-2 font-normal text-base">
                Start time <span className="text-red-500">*</span>
              </label>
              <Input
                type="time"
                value={eventData.startTime}
                onChange={(e) =>
                  setEventData((prev) => ({
                    ...prev,
                    startTime: e.target.value,
                  }))
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="flex justify-between mb-2 font-normal text-base">
                End time <span className="text-red-500">*</span>
              </label>
              <Input
                type="time"
                value={eventData.endTime}
                onChange={(e) =>
                  setEventData((prev) => ({
                    ...prev,
                    endTime: e.target.value,
                  }))
                }
                className="w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-normal text-base mb-3">
              Would participants require password to join the event?
            </label>
            <RadioGroup
              value={eventData.passwordRequired}
              onValueChange={(val) =>
                setEventData((prev) => ({ ...prev, passwordRequired: val }))
              }
              className="flex flex-col gap-3 mt-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="yes" />
                <label htmlFor="yes" className="text-sm">
                  Yes
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="no" />
                <label htmlFor="no" className="text-sm">
                  No
                </label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              className="flex-1 bg-blue-600 p-5 text-lg hover:bg-blue-700 text-white disabled:bg-blue-200"
              disabled={!allFieldsFilled}
              onClick={() => setModalOpen(true)}
            >
              Publish Event
            </Button>
            <Button
              className="flex-1 bg-gray-300 p-5 text-lg text-gray-700 hover:bg-gray-200 disabled:bg-gray-50"
              disabled={!allFieldsFilled}
              onClick={handleSubmit}
            >
              Save Event
            </Button>
          </div>
        </div>
      </div>
      <VideoSourceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
