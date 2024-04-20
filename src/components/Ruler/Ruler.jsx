import './Ruler.css';

const Ruler = () => {
  const lines = [];

  for(let i=1; i<=50; i++){
    lines.push(i);
  }
  
  return (
    <div className='ruler'>
      {lines.map( (lineNo, index) =>  <div key={index} className='ruler-line'>{lineNo}</div>)}
    </div>
  );
};

export default Ruler;