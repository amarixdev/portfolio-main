const Overlay = ({ openAwardsMobile }: { openAwardsMobile: boolean }) => {
  return (
    <div>
      {openAwardsMobile && (
        <div className="h-screen bg-[#0000006b] fixed z-[150] w-full"></div>
      )}
    </div>
  );
};

export default Overlay;
