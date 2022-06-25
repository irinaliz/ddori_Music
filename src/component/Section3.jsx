import React from "react";
import "../css/player.css";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Section3() {
    return (
    <section>
      {/* 플레이어 */} 
        <div className="player">
            <div className="song_left">
                <span className="song_art">앨범아트</span>
            </div>
            <div className="song_info">
                <h2 className="song_name">Next Level</h2>
                <p className="song_singer">aespa - Next Level</p>
            </div>
            <div className="player-btn">
                <span className="play_before-btn">
                    <FontAwesomeIcon icon={faBackward} />
                </span>
                <span className="play_start-btn">
                    <FontAwesomeIcon icon={faPlay} />
                </span>
                <span className="play_after-btn">
                    <FontAwesomeIcon icon={faForward} />
                </span>
                <span className="play_list-btn">
                    <FontAwesomeIcon icon={faMusic} />
                </span>
            </div>
        </div>
    </section>
    );
}
