import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const Graph = ({detailResult}) => {
  //   const data = [
  //       {
  //         data: {
  //           battery: `${detailResult.Crossing}`,
  //           design: `${detailResult.Finishing}`,
  //           useful: `${detailResult.HeadingAccuracy}`,
  //           speed: `${detailResult.ShortPassing}`,
  //           weight: `${detailResult.Volleys}`
  //         },
  //         meta: { color: '#FA287E'}
  //       }
  //     ];
  
  // const captions = {
  //       // columns
  //       battery: 'Crossing',
  //       design: 'Finishing',
  //       useful: 'HeadingAccuracy',
  //       speed: 'ShortPassing',
  //       weight: 'Volleys'
  //     };
    return (
      <div>
      <RadarChart
          captions={{
            // columns
            battery: 'Crossing',
            design: 'Finishing',
            useful: 'HeadingAccuracy',
            speed: 'ShortPassing',
            weight: 'Volleys'
          }}
          data={[
            // data
            {
              data: {
                battery: 0.7,
                design: .8,
                useful: 0.9,
                speed: 0.67,
                weight: 0.8
              },
              meta: { color: '#FA287E'}
            }
          ]}
          size={400}
          // options={{dots: true,}}
        />
      </div>
    )
}

export default Graph
