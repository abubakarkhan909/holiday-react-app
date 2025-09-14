import './ContentWithImage.scss';

export default function ContentWithImage({ image, content }) {
  return (
    <section className="content-with-image">
      <div className="cwi-image">
        <img src={image} alt="content section" />
      </div>
      <div className="cwi-content">
        <div className='content'>
            {content.map((block, index) => {
            switch (block.type) {
                case "h2":
                return <h2 key={index}>{block.text}</h2>;
                case "h3":
                return <h3 key={index}>{block.text}</h3>;
                case "h4":
                return <h4 key={index}>{block.text}</h4>;
                case "p":
                return (
                    <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                );
                default:
                return null;
            }
            })}
        </div>
      </div>
    </section>
  );
}
