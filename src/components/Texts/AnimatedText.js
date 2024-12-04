const AnimatedText = () => {
    const text = "39 out of 40 attended";
  
    return (
      
        <h1 className="mt-4 text-2xl font-bold leading-6 text-black w-full">
          {text.match(/./gu).map((char, index) => (
            <span
              className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
    );
  };
  

export default AnimatedText