function App() {
  const data = [
    {
      id: "image1",
      img: "https://backstagetalks.com/img/backstagetalks_cover_issue_7.png",
      color: "bg-[#ff608c]",
    },
    {
      id: "image2",
      img: "https://backstagetalks.com/img/backstagetalks_cover_issue_6.png",
      color: "bg-[#ffffff]",
    },
    {
      id: "image3",
      img: "https://backstagetalks.com/img/backstagetalks_cover_issue_5.png",
      color: "bg-[#00c1b5]",
    },
    {
      id: "image4",
      img: "https://backstagetalks.com/img/backstagetalks_cover_issue_4.png",
      color: "bg-[#ff6519]",
    },
    {
      id: "image5",
      img: "https://backstagetalks.com/img/backstagetalks_cover_issue_3.png",
      color: "bg-[#ffbe00]",
    },
    {
      id: "image6",
      img: "https://backstagetalks.com/img/backstagetalks_cover2017.png",
      color: "bg-[#1d3fbb]",
    },
    {
      id: "image7",
      img: "https://backstagetalks.com/img/backstagetalks_cover2016_n.png",
      color: "bg-[#e30512]",
    },
  ];
  return (
    <div className="h-screen relative">
      <div className="h-full overflow-y-auto snap-y snap-mandatory transition-all duration-500 ease-in-out">
        {data.map((item, index) => (
          <section
            id={item.id}
            key={index}
            className={`snap-start h-screen relative ${item.color} transition-all duration-500 ease-in-out`}
          >
            <div className="flex justify-center items-center h-full">
              <img src={item.img} alt="" className="w-2/3 md:w-[600px]" />
            </div>
          </section>
        ))}
      </div>
      <div>
        <aside className="text-2xl font-bold absolute bottom-3 right-3">
          <ul>
            {data.map((item, index) => (
              <li key={index} className="hover:underline">
                <a href={`#${item.id}`}>Issue #{index + 1}</a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="absolute top-3 left-3">
          <img
            src="https://backstagetalks.com/img/logo.png"
            alt=""
            className="w-2/3"
          />
        </div>
        <div className="absolute top-3 right-3 hover:underline">
          <a href="">info@backstage.com</a>
        </div>
        <div className="absolute left-3 bottom-3 w-[200px] font-bold">
          <h2>
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.
          </h2>
          <p className="font-normal whitespace-nowrap">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Published by Büro Milk
            </a>
          </p>

          <a href="#" className="underline hover:no-underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
