import { useEffect } from "react";
import Arrow from '../assets/Arrow.jpg'

const SelectRank = ({ actualRank, Api }) => {
    const actualRankName = Api.rank.filter(rank => rank.tierName === actualRank);

    useEffect(() => {
    }, [actualRank]);

    return (
        <>
        <div className="rankImgCon">
        <img src={actualRankName.length > 0 ? `${actualRankName[0].largeIcon}` : `${Api.rank[0].largeIcon}`} alt={actualRankName.length > 0 ? `${actualRankName[0].tierName}` : 'No Image'} className="rankImg" />
        </div>
        <img src={Arrow} alt="Icon" className="arrowrank"/>
        <div className="maxRankImgCon">
        <img src={`${Api.rank[0].largeIcon}`} alt={`${Api.rank[0].tierName}`} className="maxRank" />
        </div>
        </>
    );
};

export default SelectRank;
