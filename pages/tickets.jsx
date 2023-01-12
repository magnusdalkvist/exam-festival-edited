import React from "react";
import styles from "../styles/Tickets.module.css";
import { Collapse } from "@nextui-org/react";

function tickets({ setState, data }) {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>TICKETS</h1>
      <a className={styles.calltoaction} onClick={() => setState("open")}>
        BUY TICKETS HERE
      </a>

      <div className={styles.wrapper}>
        <div className={styles.spotOptions}>
          <h2 className={styles.h2}>Spot options:</h2>
          <div className={styles.spots}>
            {data.map((e) => {
              let width = (e.available / e.spots) * 100;
              console.log(width);
              return (
                <div className={styles.spot}>
                  <h3>{e.area}</h3>
                  <div className={styles.available}>
                    <svg
                      className={styles.tent}
                      viewBox="0 0 224 144"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin slice"
                    >
                      <path d="M112 0C86.2 0 63 28.8 43.4 63.6L8 126.8V122H0V144H8V139.6L49.2 67.6L98.6 37C107.6 31.4 108.2 30.4 112 30.4C115.8 30.4 116.4 31.6 125.4 37L174.8 67.6L216 139.6V144H224V121.8H216V126.8L180.4 63.6C161 28.8 137.8 0 112 0ZM83.6 53.2L54.8 70.8L24.6 140H199.4L169.2 70.8L140.6 53.2L146.4 109.4C146.8 114.2 143 118.2 138.8 118.2H85.6C81.4 118.2 77.6 114.2 78 109.4L83.6 53.2Z" />
                    </svg>
                    <svg
                      width={width + "%"}
                      className={styles.tent + " " + styles.overlay}
                      viewBox="0 0 224 144"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin slice"
                    >
                      <path d="M112 0C86.2 0 63 28.8 43.4 63.6L8 126.8V122H0V144H8V139.6L49.2 67.6L98.6 37C107.6 31.4 108.2 30.4 112 30.4C115.8 30.4 116.4 31.6 125.4 37L174.8 67.6L216 139.6V144H224V121.8H216V126.8L180.4 63.6C161 28.8 137.8 0 112 0ZM83.6 53.2L54.8 70.8L24.6 140H199.4L169.2 70.8L140.6 53.2L146.4 109.4C146.8 114.2 143 118.2 138.8 118.2H85.6C81.4 118.2 77.6 114.2 78 109.4L83.6 53.2Z" />
                    </svg>
                    <p>Spots left: {e.available}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.ticketOptions}>
          <h2 className={styles.h2}>Ticket options:</h2>
          <Collapse.Group bordered className={styles.collapseGroup + " collapsegroup"}>
            <Collapse expanded title="Regular ticket">
              <div className={styles.info}>
                <p>
                  This option grants you access to the festival for the entire duration. The regular
                  ticket costs 799,- and gives you access to all the music, art, and entertainment
                  at the festival.
                </p>
              </div>
            </Collapse>
            <Collapse title="VIP ticket">
              <div className={styles.info}>
                <p>
                  For an upgraded experience, you can purchase a VIP ticket for 1299,-. This ticket
                  includes exclusive access to VIP areas and amenities, such as reserved seating at
                  the main stage, access to VIP-only bars and restrooms, and other perks.
                </p>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
        <div className={styles.campingOptions}>
          <h2 className={styles.h2}>Campsite options:</h2>
          <Collapse.Group bordered className="collapsegroup">
            <Collapse expanded title="Fixed booking fee">
              <div className={styles.info}>
                <p>
                  For 99,-, you can reserve a spot in the campsite for your own tent. This fee
                  covers the cost of your campsite spot for the duration of the festival.
                </p>
              </div>
            </Collapse>
            <Collapse title="Green camping option">
              <div className={styles.info}>
                <p>
                  For an additional 249,-, you can opt for the Green camping option. This means that
                  your tent will be placed in a special area of the campsite where the environmental
                  impact is minimized. You'll also receive a special wristband that gives you access
                  to exclusive green camping amenities and activities.
                </p>
              </div>
            </Collapse>
            <Collapse title="Crew-set up tents">
              <div className={styles.info}>
                <p>
                  If you prefer not to bring your own tent, you can pay for one of our crew-set up
                  tents. These come in 2-person or 3-person sizes, and include the tent, bedding,
                  and setup. The 2-person tent costs 299,-, and the 3-person tent costs 399,-. This
                  option is perfect for those who want a hassle-free camping experience.
                </p>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </div>
  );
}

export default tickets;

export async function getServerSideProps() {
  const res = await fetch("https://greenmark.fly.dev/available-spots/");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
