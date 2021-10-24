import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const Graph = ({ detailResult }) => {
  const updatedValues = {
    Crossing: detailResult.Crossing/100,
    Finishing: detailResult.Finishing/100,
    HeadingAccuracy: detailResult.HeadingAccuracy/100,
    ShortPassing: detailResult.ShortPassing/100,
    Volleys: detailResult.Volleys/100
  }
  return (
    <div>
      <RadarChart
        captions={{
          // columns
          battery: "Crossing",
          design: "Finishing",
          useful: "HeadingAccuracy",
          speed: "ShortPassing",
          weight: "Volleys",
        }}
        data={[
          // data
          {
            data: {
              battery: updatedValues.Crossing,
              design: updatedValues.Finishing,
              useful: updatedValues.HeadingAccuracy,
              speed: updatedValues.ShortPassing,
              weight: updatedValues.Volleys,
            },
            meta: { color: "#FA287E" },
          },
        ]}
        options={{
          axes: true, // show axes?
          scales: 5, // show scale circles?
          captions: true, // show captions?
          captionMargin: 10,
          dots: false, // show dots?
          zoomDistance: 1.2,
        }}
        size={400}
        // options={{dots: true,}}
      />
    </div>
  );
};

export default Graph;
