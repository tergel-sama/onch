export default function CareerItem({ title, content, long }) {
  return (
    <div className="card w-full bg-base-100 ">
      <div className="card-body">
        <h2
          className={`card-title text-[32px] font-bold h-[5rem] ${
            long ? 'w-full' : 'w-10'
          } `}
        >
          {title}
        </h2>
        <p className="text-[20px] text-justify">{content}</p>
      </div>
    </div>
  );
}
