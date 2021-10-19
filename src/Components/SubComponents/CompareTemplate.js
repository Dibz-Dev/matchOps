import LoadingPage from "../LoadingPage";

const CompareTemplate = ({ data, loading, result, show}) => {



        loading ? console.log('waiting for data') : console.log(data.response[0])

   

  {if (loading || !show)  {return (


        <div className="compareTemplateWrapper">

            <div className="compareTemplateGroup">
                <div className="compareCard">
                  <LoadingPage />
                </div>
            </div>

        </div>
      );} else if (!loading || show) {

        return (


            <div className="compareTemplateWrapper">
    
                <div className="compareTemplateGroup">
                    <div className="compareCard">
                        {/* {!show && <LoadingPage />} */}
                        {loading ? <LoadingPage /> :
                        <div className="playerCompareCard">
                            <img key={data.photo} src={data.response[0].player.photo} alt="" />
                            <h1 key={data.name}>{data.response[0].player.name} <span> - Age {data.response[0].player.age}</span></h1>
                            {/* <h3 key={data.}></h3>
                            <h3 key={}></h3> */}
                        </div>
                         }
                    </div>
                </div>
    
            </div>
          );
      }}
    }
 
export default CompareTemplate;