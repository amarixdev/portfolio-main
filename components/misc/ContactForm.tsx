import { Button, Input, Spinner, Textarea } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import {
  useEffect,
  useRef,
  useState
} from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { ENV } from "../../environment";
import { useMediaQuery } from "../../util/hooks";

const ContactForm = ({
  copied,
  setCopied,

}: {
  copied: boolean;
  setCopied: (copied: boolean) => void;
}) => {
  const isBreakPoint = useMediaQuery(1023);
  const simulateAPICall = () => {
    return new Promise((resolve: (value: void) => void) => {
      setTimeout(() => {
        console.log("test");
        resolve();
      }, 2000);
    });
  };

  const [copyActive, setCopyActive] = useState(false);
  const [flashHeader, setFlashHeader] = useState(false);
  const [form, setForm] = useState({
    submitAttempt: false,
    submitted: false,
    header: "",
    error: false,
    loading: false,
  });

  const [formText, setFormText] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const emptyField = Object.values(formText).some((key) => key === "");
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  const [tapEffect, setTapEffect] = useState({
    copy: false,
    icon: false,
  });

  const handleTap = (btn: string) => {
    if (btn === "copy") {
      setTapEffect((prev) => ({ ...prev, copy: true }));
      setTimeout(() => {
        setTapEffect((prev) => ({ ...prev, copy: false }));
      }, 150);
    }
    if (btn === "icon") {
      setTapEffect((prev) => ({ ...prev, icon: true }));
      setTimeout(() => {
        setTapEffect((prev) => ({ ...prev, icon: false }));
      }, 150);
    }
  };

  const handleCopyButton = (bool: boolean, action: string) => {
    if (!isBreakPoint && action === "click") {
      return;
    }
    if (isBreakPoint && action === "click" && copied) {
      handleTap("copy");
    } else {
      setCopyActive(bool);
    }
  };

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  const handleEmailCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (error) {
      console.error(error);
    }
  };

  const formRef = useRef<HTMLFormElement | any>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const submitForm = async (e: any) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, submitAttempt: true }));
    const params = {
      from_name: nameRef.current?.value,
      contact_info: contactRef.current?.value,
      message: messageRef.current?.value,
    };

    if (!isOnline) {
      setForm((prev) => ({
        ...prev,
        header: "Oops: No Internet Connection",
        submitted: false,
        error: true,
      }));
      return;
    }

    if (emptyField) {
      setForm((prev) => ({
        ...prev,
        header: "Please complete all fields!",
        submitted: false,
        error: true,
      }));
      return;
    }

    try {
      setForm((prev) => ({ ...prev, loading: true, error: false }));

      await emailjs.send(
        ENV.SERVICE_ID,
        ENV.TEMPLATE_ID,
        params,
        ENV.PUBLIC_KEY
      );

      //   await simulateAPICall();
      setForm((prev) => ({
        ...prev,
        loading: false,
        error: false,
        submitted: true,
        header: "Thanks for reaching out!",
      }));
      setFormText((prev) => ({
        ...prev,
        name: "",
        contact: "",
        message: "",
      }));
    } catch (error) {
      setForm((prev) => ({
        ...prev,
        header: "Internal Error: Please try again ",
        submitted: false,
        error: true,
      }));
    }
  };

  return (
    <div className="w-full flex flex-col relative pt-24 lg:pt-16 items-center ">
      <p className="font-bold text-4xl"> Let&apos;s Chat</p>
      <div className="flex items-center">
        <p className="font-light text-lg text-[#bcbcbc] rounded-3xl px-4">
          amaridev@alumni.unc.edu
        </p>
        <button
          onClick={() => {
            handleCopyButton(false, "click");
            handleEmailCopy("amaridev@alumni.unc.edu");
          }}
          onMouseDown={() => {
            handleCopyButton(true, "mousedown");
            setForm((prev) => ({ ...prev, submitAttempt: false }));
          }}
          onMouseUp={() => handleCopyButton(false, "mouseup")}
        >
          <AiOutlineCopy
            onClick={() => handleTap("icon")}
            color="#bcbcbc"
            size={25}
            className={`${
              tapEffect.icon ? "scale-90 opacity-60" : "scale-100 opacity-100"
            } cursor-pointer transition-all duration-150 ease-in-out`}
          />
        </button>
      </div>
      <h3
        className={`${
          copied
            ? "opacity-100"
            : form.submitAttempt
            ? "opacity-100"
            : "opacity-0"
        } ${copyActive ? "scale-95" : "scale-100"} ${
          form.submitAttempt && form.error
            ? "text-red-400"
            : form.submitAttempt && form.submitted
            ? "text-green-400"
            : "text-[#26a7de]"
        } ${flashHeader && "opacity-40"} ${
          isBreakPoint && tapEffect.copy
            ? "scale-95 opacity-60"
            : "scale-100 opacity-100"
        } absolute top-[172px] lg:top-[140px] font-extrabold transition-all ${
          isBreakPoint ? "duration-150" : "duration-100"
        }  ease-out`}
      >
        {form.loading && <Spinner color={"#999"} />}
        {!form.loading && form.submitAttempt && form.header}
        {!form.loading &&
          copied &&
          !form.submitAttempt &&
          "Email copied to Clipboard"}
      </h3>
      <form className="pt-12" ref={formRef}>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-medium"> What&apos;s your name?</h3>
            <Input
              onChange={(e) => {
                setFormText((prev) => ({ ...prev, name: e.target.value }));
                setCopied(false);
                if (form.submitted) {
                  setForm((prev) => ({ ...prev, submitAttempt: false }));
                }
              }}
              type="text"
              ref={nameRef}
              placeholder="John Doe"
              value={formText.name}
            />
          </div>
          <div>
            <h3 className="font-medium"> How should I get back to you? </h3>
            <Input
              onChange={(e) => {
                setFormText((prev) => ({
                  ...prev,
                  contact: e.target.value,
                }));
                setCopied(false);
              }}
              type="text"
              ref={contactRef}
              placeholder="Email, LinkedIn, etc."
              value={formText.contact}
            />
          </div>
          <div>
            <h3 className="font-medium"> Message </h3>
            <Textarea
              onChange={(e) => {
                setFormText((prev) => ({
                  ...prev,
                  message: e.target.value,
                }));
                setCopied(false);
              }}
              ref={messageRef}
              placeholder="Hello Amari"
              value={formText.message}
              resize={"none"}
            />
          </div>
          <Button
            className="mt-10 py-8 lg:mt-4 lg:py-0"
            onClick={(e) => {
              if (form.error && isBreakPoint) {
                setFlashHeader(true);
                setTimeout(() => {
                  setFlashHeader(false);
                }, 150);
              }
              submitForm(e);
            }}
            onMouseDown={() => {
              if (form.error && !isBreakPoint) {
                setFlashHeader(true);
              }
            }}
            onMouseUp={() => setFlashHeader(false)}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
