import '../styling/components/weathertile-holder.css';
import '../styling/components/weathertile.css';


function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }


export const Weathertileholder = () => {
    
    return (
        <div className="parent-container">
            {Array.from({ length: 7 }, (v, k) => k).map(index =>
                <div className="tilediv" key={index}>

                    <div className="content-holder">
                        <div className="date">
                            {(addDays(index).toDateString())}
                        </div>

                        <div>
                            <div className="icon-holder">
                                <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                <span className="material-symbols-outlined">
                                sunny
                                </span>
                            </div>
                            <div className="temperature-holder">
                                22°C
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
