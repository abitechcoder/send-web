import { layout, styles } from "../styles";

const SendEvolution = () => {
  return (
    <section className={`bg-white ${layout.section} relative`}>
      <div className="hidden fixed md:top-[400px] lg:top-[600px] md:right-[30px] lg:right-[70px] md:grid gap-4 z-30">
        <div className="w-[50px] h-[50px] rounded-full bg-darkgrey grid place-items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19.8265L12 3.13086"
              stroke="#FFFEF0"
              stroke-width="2"
            />
            <path
              d="M12 3.13086C12 7.74123 8.0927 11.4787 3.2727 11.4787"
              stroke="#FFFEF0"
              stroke-width="2"
            />
            <path
              d="M12.0003 3.13086C12.0003 7.74124 15.9076 11.4787 20.7275 11.4787"
              stroke="#FFFEF0"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-secondary grid place-items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4.1735V20.8691" stroke="#FFFEF0" stroke-width="2" />
            <path
              d="M12 20.8691C12 16.2588 8.0927 12.5213 3.2727 12.5213"
              stroke="#FFFEF0"
              stroke-width="2"
            />
            <path
              d="M12.0003 20.8691C12.0003 16.2588 15.9076 12.5213 20.7275 12.5213"
              stroke="#FFFEF0"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
      <div>
        <h2 className={`${styles.heading3} text-secondary text-left`}>
          Who We Are
        </h2>
        <h2
          className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-left text-black uppercase`}
        >
          THE EVOLUTION OF SEND SIERRA LEONE
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_70px] lg:grid-cols-[1fr_200px] py-8">
        <p className="w-full text-left">
          SEND Sierra Leone has evolved through three phases, each generating
          innovative management and programming strategies that enabled the
          organization to achieve 10 significant development results. The
          strategies, tools and partnerships used to accomplish these results
          will guide SEND Sierra Leone in implementing the five Strategic
          Directions of the organisation. These impacts are presented below.
        </p>
        <div className="hidden"></div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-[11px] h-[11px] rounded-full bg-secondary"></div>
        <div className="ml-[5px] border-l-2 border-l-secondary grid grid-cols-[70px_1fr] md:grid-cols-[70px_1fr_70px] lg:grid-cols-[100px_1fr_200px] py-8">
          <div className=" flex flex-col items-center">
            <svg
              viewBox="0 0 38 294"
              className=" h-[100px] md:h-[200px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.95 293.5H31.05L17.65 278.4C16.65 277.267 15.7083 276.467 14.825 276C13.9417 275.533 13.1167 275.3 12.35 275.3C11.25 275.3 10.275 275.525 9.425 275.975C8.55833 276.425 7.88333 277.058 7.4 277.875C6.9 278.692 6.65 279.65 6.65 280.75C6.65 281.9 6.91666 282.917 7.45 283.8C7.96667 284.667 8.65833 285.342 9.525 285.825C10.375 286.308 11.3 286.533 12.3 286.5V293.5C9.83333 293.5 7.7 292.958 5.9 291.875C4.1 290.792 2.70833 289.283 1.725 287.35C0.741666 285.417 0.249999 283.167 0.249999 280.6C0.249999 278.25 0.766665 276.15 1.8 274.3C2.81666 272.433 4.24166 270.967 6.075 269.9C7.90833 268.833 10.0333 268.3 12.45 268.3C14.2333 268.3 15.7167 268.55 16.9 269.05C18.0667 269.55 19.15 270.292 20.15 271.275C21.1333 272.258 22.25 273.467 23.5 274.9L32.05 284.65L30.55 285.2V268.3H36.95V293.5ZM37.75 248.974C37.75 251.641 37.1917 253.974 36.075 255.974C34.9583 257.974 33.4 259.533 31.4 260.649C29.4 261.766 27.0667 262.324 24.4 262.324H13.6C10.9333 262.324 8.6 261.766 6.6 260.649C4.6 259.533 3.04166 257.974 1.925 255.974C0.808332 253.974 0.249999 251.641 0.249999 248.974C0.249999 246.308 0.808332 243.974 1.925 241.974C3.04166 239.974 4.6 238.416 6.6 237.299C8.6 236.183 10.9333 235.624 13.6 235.624H24.4C27.0667 235.624 29.4 236.183 31.4 237.299C33.4 238.416 34.9583 239.974 36.075 241.974C37.1917 243.974 37.75 246.308 37.75 248.974ZM31.3 248.974C31.3 247.774 31.0167 246.691 30.45 245.724C29.8833 244.758 29.1167 243.991 28.15 243.424C27.1833 242.858 26.1 242.574 24.9 242.574H13.05C11.85 242.574 10.7667 242.858 9.8 243.424C8.83333 243.991 8.06667 244.758 7.5 245.724C6.93333 246.691 6.65 247.774 6.65 248.974C6.65 250.174 6.93333 251.258 7.5 252.224C8.06667 253.191 8.83333 253.958 9.8 254.524C10.7667 255.091 11.85 255.374 13.05 255.374H24.9C26.1 255.374 27.1833 255.091 28.15 254.524C29.1167 253.958 29.8833 253.191 30.45 252.224C31.0167 251.258 31.3 250.174 31.3 248.974ZM37.75 215.283C37.75 217.949 37.1917 220.283 36.075 222.283C34.9583 224.283 33.4 225.841 31.4 226.958C29.4 228.074 27.0667 228.633 24.4 228.633H13.6C10.9333 228.633 8.6 228.074 6.6 226.958C4.6 225.841 3.04166 224.283 1.925 222.283C0.808332 220.283 0.249999 217.949 0.249999 215.283C0.249999 212.616 0.808332 210.283 1.925 208.283C3.04166 206.283 4.6 204.724 6.6 203.608C8.6 202.491 10.9333 201.933 13.6 201.933H24.4C27.0667 201.933 29.4 202.491 31.4 203.608C33.4 204.724 34.9583 206.283 36.075 208.283C37.1917 210.283 37.75 212.616 37.75 215.283ZM31.3 215.283C31.3 214.083 31.0167 212.999 30.45 212.033C29.8833 211.066 29.1167 210.299 28.15 209.733C27.1833 209.166 26.1 208.883 24.9 208.883H13.05C11.85 208.883 10.7667 209.166 9.8 209.733C8.83333 210.299 8.06667 211.066 7.5 212.033C6.93333 212.999 6.65 214.083 6.65 215.283C6.65 216.483 6.93333 217.566 7.5 218.533C8.06667 219.499 8.83333 220.266 9.8 220.833C10.7667 221.399 11.85 221.683 13.05 221.683H24.9C26.1 221.683 27.1833 221.399 28.15 220.833C29.1167 220.266 29.8833 219.499 30.45 218.533C31.0167 217.566 31.3 216.483 31.3 215.283ZM37 180.291H31.4V195.941H25.05L0.999999 184.591V176.791L25.05 188.141V180.291H16.05V173.391H25.05V170.191H31.4V173.391H37V180.291ZM23.85 154.67H18.6L18.6 139.67H23.85V154.67ZM36.95 124.164H31.05L17.65 109.064C16.65 107.931 15.7083 107.131 14.825 106.664C13.9417 106.197 13.1167 105.964 12.35 105.964C11.25 105.964 10.275 106.189 9.425 106.639C8.55833 107.089 7.88333 107.722 7.4 108.539C6.9 109.356 6.65 110.314 6.65 111.414C6.65 112.564 6.91666 113.581 7.45 114.464C7.96667 115.331 8.65833 116.006 9.525 116.489C10.375 116.972 11.3 117.197 12.3 117.164V124.164C9.83333 124.164 7.7 123.622 5.9 122.539C4.1 121.456 2.70833 119.947 1.725 118.014C0.741666 116.081 0.249999 113.831 0.249999 111.264C0.249999 108.914 0.766665 106.814 1.8 104.964C2.81666 103.097 4.24166 101.631 6.075 100.564C7.90833 99.4974 10.0333 98.9641 12.45 98.9641C14.2333 98.9641 15.7167 99.2141 16.9 99.7141C18.0667 100.214 19.15 100.956 20.15 101.939C21.1333 102.922 22.25 104.131 23.5 105.564L32.05 115.314L30.55 115.864V98.9641H36.95L36.95 124.164ZM37.75 79.6383C37.75 82.3049 37.1917 84.6383 36.075 86.6383C34.9583 88.6383 33.4 90.1966 31.4 91.3133C29.4 92.4299 27.0667 92.9883 24.4 92.9883H13.6C10.9333 92.9883 8.6 92.4299 6.6 91.3133C4.6 90.1966 3.04166 88.6383 1.925 86.6383C0.808332 84.6383 0.249999 82.3049 0.249999 79.6383C0.249999 76.9716 0.808332 74.6383 1.925 72.6383C3.04166 70.6383 4.6 69.0799 6.6 67.9633C8.6 66.8466 10.9333 66.2883 13.6 66.2883H24.4C27.0667 66.2883 29.4 66.8466 31.4 67.9633C33.4 69.0799 34.9583 70.6383 36.075 72.6383C37.1917 74.6383 37.75 76.9716 37.75 79.6383ZM31.3 79.6383C31.3 78.4383 31.0167 77.3549 30.45 76.3883C29.8833 75.4216 29.1167 74.6549 28.15 74.0883C27.1833 73.5216 26.1 73.2383 24.9 73.2383H13.05C11.85 73.2383 10.7667 73.5216 9.8 74.0883C8.83333 74.6549 8.06667 75.4216 7.5 76.3883C6.93333 77.3549 6.65 78.4383 6.65 79.6383C6.65 80.8383 6.93333 81.9216 7.5 82.8883C8.06667 83.8549 8.83333 84.6216 9.8 85.1883C10.7667 85.7549 11.85 86.0383 13.05 86.0383H24.9C26.1 86.0383 27.1833 85.7549 28.15 85.1883C29.1167 84.6216 29.8833 83.8549 30.45 82.8883C31.0167 81.9216 31.3 80.8383 31.3 79.6383ZM37.75 45.9469C37.75 48.6135 37.1917 50.9469 36.075 52.9469C34.9583 54.9469 33.4 56.5052 31.4 57.6219C29.4 58.7385 27.0667 59.2969 24.4 59.2969H13.6C10.9333 59.2969 8.6 58.7385 6.6 57.6219C4.6 56.5052 3.04166 54.9469 1.925 52.9469C0.808332 50.9469 0.249999 48.6135 0.249999 45.9469C0.249999 43.2802 0.808332 40.9469 1.925 38.9469C3.04166 36.9469 4.6 35.3885 6.6 34.2719C8.6 33.1552 10.9333 32.5969 13.6 32.5969H24.4C27.0667 32.5969 29.4 33.1552 31.4 34.2719C33.4 35.3885 34.9583 36.9469 36.075 38.9469C37.1917 40.9469 37.75 43.2802 37.75 45.9469ZM31.3 45.9469C31.3 44.7469 31.0167 43.6635 30.45 42.6969C29.8833 41.7302 29.1167 40.9635 28.15 40.3969C27.1833 39.8302 26.1 39.5469 24.9 39.5469H13.05C11.85 39.5469 10.7667 39.8302 9.8 40.3969C8.83333 40.9635 8.06667 41.7302 7.5 42.6969C6.93333 43.6635 6.65 44.7469 6.65 45.9469C6.65 47.1469 6.93333 48.2302 7.5 49.1969C8.06667 50.1635 8.83333 50.9302 9.8 51.4969C10.7667 52.0635 11.85 52.3469 13.05 52.3469H24.9C26.1 52.3469 27.1833 52.0635 28.15 51.4969C29.1167 50.9302 29.8833 50.1635 30.45 49.1969C31.0167 48.2302 31.3 47.1469 31.3 45.9469ZM37.75 13.5555C37.75 15.9888 37.2583 18.1555 36.275 20.0555C35.275 21.9388 33.9083 23.4221 32.175 24.5055C30.425 25.5721 28.4333 26.1055 26.2 26.1055C24.3 26.1055 22.5083 25.6805 20.825 24.8305C19.1417 23.9638 17.7667 22.7221 16.7 21.1055L18.8 21.2555C17.6167 22.4721 16.3667 23.4305 15.05 24.1305C13.7333 24.8138 12.25 25.1555 10.6 25.1555C8.51666 25.1555 6.7 24.6638 5.15 23.6805C3.6 22.6805 2.4 21.3138 1.55 19.5805C0.683332 17.8305 0.249999 15.8221 0.249999 13.5555C0.249999 11.2888 0.683332 9.2888 1.55 7.55547C2.4 5.80547 3.6 4.4388 5.15 3.45547C6.7 2.45547 8.51666 1.95547 10.6 1.95547C12.25 1.95547 13.7333 2.28047 15.05 2.93047C16.35 3.58047 17.6167 4.57213 18.85 5.90547H16.75C17.75 4.32214 19.1 3.10547 20.8 2.25547C22.5 1.3888 24.3 0.955468 26.2 0.955468C28.4333 0.955468 30.425 1.49713 32.175 2.58047C33.9083 3.6638 35.275 5.15547 36.275 7.05547C37.2583 8.95547 37.75 11.1221 37.75 13.5555ZM31.35 13.5555C31.35 11.9555 30.9167 10.6555 30.05 9.65547C29.1833 8.65547 27.9 8.15547 26.2 8.15547C24.5167 8.15547 23.2333 8.65547 22.35 9.65547C21.45 10.6555 21 11.9555 21 13.5555C21 15.1555 21.45 16.4471 22.35 17.4305C23.2333 18.4138 24.5167 18.9055 26.2 18.9055C27.9 18.9055 29.1833 18.4138 30.05 17.4305C30.9167 16.4471 31.35 15.1555 31.35 13.5555ZM14.55 13.5555C14.55 12.2555 14.2333 11.1971 13.6 10.3805C12.95 9.5638 11.95 9.15547 10.6 9.15547C9.25 9.15547 8.25 9.5638 7.6 10.3805C6.93333 11.1971 6.6 12.2555 6.6 13.5555C6.6 14.8555 6.93333 15.9138 7.6 16.7305C8.25 17.5471 9.25 17.9555 10.6 17.9555C11.95 17.9555 12.95 17.5471 13.6 16.7305C14.2333 15.9138 14.55 14.8555 14.55 13.5555Z"
                fill="#1B43C6"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${styles.heading3} text-secondary text-left`}>
              Phase One: Operating as Consultancy Service Provider
            </h2>
            <p className={styles.paragraph3}>
              SEND WEST Africa started operating in Sierra Leone in 2004 in
              response to a World Bank and GOSL short- term consultancy
              assignment to monitor micro-projects addressing HIV/AIDs issues,
              working with a small team of local consultants. SEND also provided
              support to the Network Movement for Justice and Development to
              replicate SEND Ghana’s use of Participatory Monitoring and
              evaluation to promote accountability and transparency in the
              implementation of the Sierra Leone Poverty Reduction Strategy.
              These consultancy assignments exposed SEND to opportunities for
              further working in Sierra Leone.
            </p>
          </div>
          <div className="hidden"></div>
        </div>
      </div>

      <div className="relative mt-8">
        <div className="absolute top-0 left-0 w-[11px] h-[11px] rounded-full bg-secondary"></div>
        <div className="ml-[5px] border-l-2 border-l-secondary grid grid-cols-[70px_1fr] md:grid-cols-[70px_1fr_70px] lg:grid-cols-[100px_1fr_200px] py-8">
          <div className=" flex flex-col items-center">
            <svg
              className=" h-[100px] md:h-[200px]"
              viewBox="0 0 38 271"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.95 270.5H31.05L17.65 255.4C16.65 254.267 15.7083 253.467 14.825 253C13.9417 252.533 13.1167 252.3 12.35 252.3C11.25 252.3 10.275 252.525 9.425 252.975C8.55833 253.425 7.88333 254.058 7.4 254.875C6.9 255.692 6.65 256.65 6.65 257.75C6.65 258.9 6.91666 259.917 7.45 260.8C7.96667 261.667 8.65833 262.342 9.525 262.825C10.375 263.308 11.3 263.533 12.3 263.5V270.5C9.83333 270.5 7.7 269.958 5.9 268.875C4.1 267.792 2.70833 266.283 1.725 264.35C0.741666 262.417 0.249999 260.167 0.249999 257.6C0.249999 255.25 0.766665 253.15 1.8 251.3C2.81666 249.433 4.24166 247.967 6.075 246.9C7.90833 245.833 10.0333 245.3 12.45 245.3C14.2333 245.3 15.7167 245.55 16.9 246.05C18.0667 246.55 19.15 247.292 20.15 248.275C21.1333 249.258 22.25 250.467 23.5 251.9L32.05 261.65L30.55 262.2V245.3H36.95V270.5ZM37.75 225.974C37.75 228.641 37.1917 230.974 36.075 232.974C34.9583 234.974 33.4 236.533 31.4 237.649C29.4 238.766 27.0667 239.324 24.4 239.324H13.6C10.9333 239.324 8.6 238.766 6.6 237.649C4.6 236.533 3.04166 234.974 1.925 232.974C0.808332 230.974 0.249999 228.641 0.249999 225.974C0.249999 223.308 0.808332 220.974 1.925 218.974C3.04166 216.974 4.6 215.416 6.6 214.299C8.6 213.183 10.9333 212.624 13.6 212.624H24.4C27.0667 212.624 29.4 213.183 31.4 214.299C33.4 215.416 34.9583 216.974 36.075 218.974C37.1917 220.974 37.75 223.308 37.75 225.974ZM31.3 225.974C31.3 224.774 31.0167 223.691 30.45 222.724C29.8833 221.758 29.1167 220.991 28.15 220.424C27.1833 219.858 26.1 219.574 24.9 219.574H13.05C11.85 219.574 10.7667 219.858 9.8 220.424C8.83333 220.991 8.06667 221.758 7.5 222.724C6.93333 223.691 6.65 224.774 6.65 225.974C6.65 227.174 6.93333 228.258 7.5 229.224C8.06667 230.191 8.83333 230.958 9.8 231.524C10.7667 232.091 11.85 232.374 13.05 232.374H24.9C26.1 232.374 27.1833 232.091 28.15 231.524C29.1167 230.958 29.8833 230.191 30.45 229.224C31.0167 228.258 31.3 227.174 31.3 225.974ZM37.75 192.283C37.75 194.949 37.1917 197.283 36.075 199.283C34.9583 201.283 33.4 202.841 31.4 203.958C29.4 205.074 27.0667 205.633 24.4 205.633H13.6C10.9333 205.633 8.6 205.074 6.6 203.958C4.6 202.841 3.04166 201.283 1.925 199.283C0.808332 197.283 0.249999 194.949 0.249999 192.283C0.249999 189.616 0.808332 187.283 1.925 185.283C3.04166 183.283 4.6 181.724 6.6 180.608C8.6 179.491 10.9333 178.933 13.6 178.933H24.4C27.0667 178.933 29.4 179.491 31.4 180.608C33.4 181.724 34.9583 183.283 36.075 185.283C37.1917 187.283 37.75 189.616 37.75 192.283ZM31.3 192.283C31.3 191.083 31.0167 189.999 30.45 189.033C29.8833 188.066 29.1167 187.299 28.15 186.733C27.1833 186.166 26.1 185.883 24.9 185.883H13.05C11.85 185.883 10.7667 186.166 9.8 186.733C8.83333 187.299 8.06667 188.066 7.5 189.033C6.93333 189.999 6.65 191.083 6.65 192.283C6.65 193.483 6.93333 194.566 7.5 195.533C8.06667 196.499 8.83333 197.266 9.8 197.833C10.7667 198.399 11.85 198.683 13.05 198.683H24.9C26.1 198.683 27.1833 198.399 28.15 197.833C29.1167 197.266 29.8833 196.499 30.45 195.533C31.0167 194.566 31.3 193.483 31.3 192.283ZM37 157.291H31.4V172.941H25.05L0.999999 161.591V153.791L25.05 165.141V157.291H16.05V150.391H25.05V147.191H31.4V150.391H37V157.291ZM23.85 141.68H18.6L18.6 126.68H23.85V141.68ZM36.95 111.174H31.05L17.65 96.0738C16.65 94.9405 15.7083 94.1405 14.825 93.6738C13.9417 93.2072 13.1167 92.9738 12.35 92.9738C11.25 92.9738 10.275 93.1988 9.425 93.6488C8.55833 94.0988 7.88333 94.7322 7.4 95.5488C6.9 96.3655 6.65 97.3238 6.65 98.4238C6.65 99.5738 6.91666 100.59 7.45 101.474C7.96667 102.34 8.65833 103.015 9.525 103.499C10.375 103.982 11.3 104.207 12.3 104.174V111.174C9.83333 111.174 7.7 110.632 5.9 109.549C4.1 108.465 2.70833 106.957 1.725 105.024C0.741666 103.09 0.249999 100.84 0.249999 98.2738C0.249999 95.9238 0.766665 93.8238 1.8 91.9738C2.81666 90.1072 4.24166 88.6405 6.075 87.5738C7.90833 86.5072 10.0333 85.9738 12.45 85.9738C14.2333 85.9738 15.7167 86.2238 16.9 86.7238C18.0667 87.2238 19.15 87.9655 20.15 88.9488C21.1333 89.9322 22.25 91.1405 23.5 92.5738L32.05 102.324L30.55 102.874L30.55 85.9738H36.95L36.95 111.174ZM37.75 66.648C37.75 69.3147 37.1917 71.648 36.075 73.648C34.9583 75.648 33.4 77.2064 31.4 78.323C29.4 79.4397 27.0667 79.998 24.4 79.998H13.6C10.9333 79.998 8.6 79.4397 6.6 78.323C4.6 77.2064 3.04166 75.648 1.925 73.648C0.808332 71.648 0.249999 69.3147 0.249999 66.648C0.249999 63.9814 0.808332 61.648 1.925 59.648C3.04166 57.648 4.6 56.0897 6.6 54.973C8.6 53.8564 10.9333 53.298 13.6 53.298H24.4C27.0667 53.298 29.4 53.8564 31.4 54.973C33.4 56.0897 34.9583 57.648 36.075 59.648C37.1917 61.648 37.75 63.9814 37.75 66.648ZM31.3 66.648C31.3 65.448 31.0167 64.3647 30.45 63.398C29.8833 62.4314 29.1167 61.6647 28.15 61.098C27.1833 60.5314 26.1 60.248 24.9 60.248H13.05C11.85 60.248 10.7667 60.5314 9.8 61.098C8.83333 61.6647 8.06667 62.4314 7.5 63.398C6.93333 64.3647 6.65 65.448 6.65 66.648C6.65 67.848 6.93333 68.9314 7.5 69.898C8.06667 70.8647 8.83333 71.6314 9.8 72.198C10.7667 72.7647 11.85 73.048 13.05 73.048H24.9C26.1 73.048 27.1833 72.7647 28.15 72.198C29.1167 71.6314 29.8833 70.8647 30.45 69.898C31.0167 68.9314 31.3 67.848 31.3 66.648ZM37 40.0566H8.4L12.55 46.8066H5.05L0.999999 40.0566V33.1066H37V40.0566ZM37.75 12.9016C37.75 14.7182 37.375 16.4266 36.625 18.0266C35.875 19.6099 34.8333 20.9766 33.5 22.1266C32.1667 23.2766 30.6167 24.1016 28.85 24.6016L27.1 18.0516C27.95 17.8349 28.6833 17.4516 29.3 16.9016C29.9167 16.3349 30.4 15.6849 30.75 14.9516C31.0833 14.2016 31.25 13.4349 31.25 12.6516C31.25 11.6182 31 10.6766 30.5 9.82656C30 8.95989 29.325 8.27656 28.475 7.77656C27.625 7.25989 26.6833 7.00156 25.65 7.00156C24.6167 7.00156 23.675 7.25989 22.825 7.77656C21.975 8.27656 21.3 8.95989 20.8 9.82656C20.3 10.6766 20.05 11.6182 20.05 12.6516C20.05 13.9182 20.2667 14.9516 20.7 15.7516C21.1167 16.5516 21.5167 17.1516 21.9 17.5516L20.15 23.3016L0.999999 22.2016V2.55156H7.35L7.35 18.4516L5.1 16.0516L17.45 16.8016L16.05 17.9516C15.3167 17.0516 14.7833 16.0266 14.45 14.8766C14.1167 13.7266 13.95 12.6516 13.95 11.6516C13.95 9.3849 14.4583 7.39323 15.475 5.67656C16.475 3.94323 17.8583 2.59323 19.625 1.62656C21.375 0.643228 23.3833 0.151561 25.65 0.151561C27.9167 0.151561 29.9667 0.743227 31.8 1.92656C33.6167 3.10989 35.0667 4.66823 36.15 6.60156C37.2167 8.53489 37.75 10.6349 37.75 12.9016Z"
                fill="#1B43C6"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${styles.heading3} text-secondary text-left`}>
              Phase Two: Promoting Livelihood Security, Women in Governance and
              Accountability in the Health Sector in Kailahun District.
            </h2>
            <p className={styles.paragraph3}>
              From 2008 to 2015, SEND was headquartered in Kailahun,
              implementing projects in 14 chiefdoms. Kailahun District was
              selected because it was where the civil war of the 1990s started
              and the last district where the rebels were disarmed. Over 80
              percent of the estimated 420,000 population were living below the
              poverty level in 2004, making Kailahun the poorest district in the
              country. The Kailahun Livelihood Security Promotion Programme was
              modeled on a similar program of SEND Ghana and a staff person from
              this project was transferred to Sierra Leone to manage it.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 1: Strengthened Livelihood Security of the Target Groups
              and Beneficiaries.
            </h2>
            <p className={styles.paragraph3}>
              In 2009, to kick start livelihood development activities,
              community leaders from the three target chiefdoms (Luawa, Upper
              Bambara and Kissi Tongi), including two women councillors,
              undertook a learning visit to the sister project in Ghana,
              exposing them to the experiences of farmers, youth and women.
              Members of the team returned from Ghana inspired and started
              leading the project in Sierra Leone. By 2010, the project was
              supporting communities to increase livelihood development
              activities through the use of micro finance and technical
              training. Small scale entrepreneurs including women, teachers and
              other income earners were educated and mobilized to establish
              Community Credit Unions in three chiefdoms, training beneficiaries
              in the Three Gender Acts and modern family planning methods. In
              addition, over 1,000 rice farmers were mobilized into cooperatives
              and each purchased shares in the credit unions in their chiefdom
              and a revolving rice seed bank was successfully implemented,
              allowing more than 500 farmers to access high yielding rice
              varieties. Under the Women’s Economic Empowerment Micro Project,
              technical and group management training skills were provided to
              hundreds of women farmers who were members of three Agricultural
              Business Centres. By the end of 2015, the three community-based
              credit unions had 1,576 members, accumulated savings of US$
              292,110, and over US$ 166,290 was given out as loans.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 2: Increased Women’s Participation in the Governance of
              Kailahun District.
            </h2>
            <p className={styles.paragraph3}>
              In 2009, SEND established a project to promote women in the
              political administration of the district – Kailahun Women in
              Governance - funded by DFID and Christian Aid. The project helped
              form the Kailahun Women in Governance Network (KWIGN) in which one
              hundred grassroots women’s groups from 14 chiefdoms were mobilized
              to increase women’s participation in political decision making in
              the District Council. They lobbied for the implementation of the
              30 percent quota for women into leadership positions. The Women on
              the Move radio program was also established in partnership with
              Radio MOA and BBC Trust to host on-air discussions about women’s
              right to political participation. The project also instituted the
              Women’s Leadership Award to showcase women’s diverse contributions
              to the development of their communities. Since 2010, this award
              has become the highlight of the celebration of 16 Days of Activism
              against Gender-Based Violence. These project activities galvanized
              the KWIGN to fight for increased election of women in the 2012
              general election. The numbers of women councillors in Kailahun
              rose from 4 in 2008 to 12 out of 29 in 2012. The district had the
              highest number of elected women in political positions in the
              country.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 3: Increased Accountability of the Health Sector Governance
              in Kailahun District.
            </h2>
            <p className={styles.paragraph3}>
              The Strengthening Health Sector Governance project was funded by
              the EU7 and Christian Aid to improve maternal and under-five
              mortality by promoting accountability and transparency in the
              implementation of the Free Health Program (FHCP), and to enhance
              water, sanitation and power supply at the two main hospitals in
              Kailahun District. In partnership with the District Budget
              Oversight Committee, 14 Chiefdom Monitoring Teams (CMTs) were
              established which lead the policy education on the FHCP in their
              chiefdoms. A local drama group was used by the CMT to popularize
              the FHCP in the communities and Radio MOA held phone-in programmes
              to mobilize the citizenry to participate in the monitoring and
              evaluation activities. The CMTs also lead monitoring exercises to
              highlight shortages of drugs, poor record keeping and weak
              coordination in the implementation of the FHCP. In 2014, the
              impact of the project was summed up by an ndependent international
              health researcher:
            </p>
            <p className={styles.paragraph3}>
              "SEND’s PM&E intervention … led to much more significant changes;
              clinics opened on time, patients were treated courteously, charts
              were hung up, benches and shades were placed in waiting areas, and
              bathroom facilities and general cleanliness improved too. … the
              large majority did not mention charges for free care as a problem,
              suggesting that this methodology had been the most successful at
              reducing illegal charges for free care"
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 4: Strengthened capabilities of communities bordering
              Kailahun District to prevent Ebola.
            </h2>
            <p className={styles.paragraph3}>
              Led by SEND staff, the KWIGN, farmers’ co-operatives, RCWA and
              Radio MOA ensured that remote communities adopted Ebola prevention
              measures, which helped make Kailahun District the first to be
              declared Ebola-free. The capacity of 32 villages bordering Liberia
              and Guinea was built to adopt Ebola prevention practices,
              strengthening the Chiefdom Ebola Task Force and forming Ebola
              Watch Committees, comprising religious, traditional and youth
              leaders which disseminated key messages to the local population.
              SEND also helped provide economic and social relief to the
              afflicted communities and survivors of Ebola, working with
              farmers’ co-operatives to establish a revolving rice seed scheme
              and distributing educational materials, such as exercise books and
              back- packs to students. Implementing these activities enabled the
              SEND team to develop competencies in planning and implementing
              preventive health education.
            </p>
          </div>
          <div className="hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default SendEvolution;
