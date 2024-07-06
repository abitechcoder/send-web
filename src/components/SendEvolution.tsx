import { layout, styles } from "../styles";

const SendEvolution = () => {
  return (
    <section className={`bg-white ${layout.section} relative`}>
      <div className="hidden fixed md:top-[400px] lg:top-[300px] md:right-[30px] lg:right-[100px] md:grid gap-4 z-30">
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
          <div className="w-full">
            <h1 className="rotated-date text-secondary font-bold text-3xl lg:text-5xl font-manrope ml-3 lg:ml-5">
              2004 - 2008
            </h1>
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
          <div className="w-full">
            <h1 className="rotated-date text-secondary font-bold text-3xl lg:text-5xl font-manrope ml-3 lg:ml-5">
              2008 - 2015
            </h1>
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

      <div className="relative mt-8">
        <div className="absolute top-0 left-0 w-[11px] h-[11px] rounded-full bg-secondary"></div>
        <div className="ml-[5px] border-l-2 border-l-secondary grid grid-cols-[70px_1fr] md:grid-cols-[70px_1fr_70px] lg:grid-cols-[100px_1fr_200px] py-8">
          <div className="w-full">
            <h1 className="rotated-date text-secondary font-bold text-3xl lg:text-5xl font-manrope ml-3 lg:ml-5">
              2016 - 2018
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${styles.heading3} text-secondary text-left`}>
              Phase Three: Expanding Health Infrastructures, Women in Governance
              Networks and Nutrition Security in Eastern Region
            </h2>
            <p className={styles.paragraph3}>
              During this phase, SEND expanded to Kono and Kenema Districts, as
              well as in Western Region. Kenema became SEND’s head office
              supported by three satellite offices in Kailahun, Kono and
              Freetown and the number of staff grew from less than 40 at the end
              of 2015 to 67 in 2018, with women accounting for 30 percent. The
              organization was transformed in 2014 from a Programme of SEND West
              Africa into a national NGO headed by a Country Director,
              supervised by a National Executive Committee.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 5: Increased women’s income and wellbeing of their families
            </h2>
            <p className={styles.paragraph3}>
              As illustrated by Figure 5, the Mama Dei Come micro finance
              project which caters to the members of the Rural Commercial Women
              Association has since 2010 benefited over 10,013 women. Petty
              trading in food items (vegetables, grains, nuts, rice and oil) is
              the main business activity of the women. Over the years,
              approximately US$ 679, 586 has been disbursed as loans to the
              women beneficiaries. Many are investing their money to grow from
              petty traders to owners of medium-sized enterprises, capable of
              hiring other members of the community.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 6: Improved health infrastructures, inputs and human
              resources
            </h2>
            <p className={styles.paragraph3}>
              Since 2016, supported by its partners, WHH, UNDP and Christian
              Aid, SEND’s health programming has expanded by implementing
              projects in Kenema and Kono districts, constructing/rehabilitating
              health centres, and water and sanitation facilities, and carrying
              out preventive health education focusing on three key infectious
              diseases that have plagued Sierra Leone: Ebola, Lassa Fever and
              cholera. SEND’s Gender Model Family (GMF) model is the framework
              for executing the preventive health education component. Fifty-one
              GMFs established under the original livelihood security programme
              have grown to over 3,000 in Kailahun and Kenema districts. The
              GMFs are the entry points for the different behavioral change
              activities promoted by the programme, which include educating and
              supporting husband and wife to agree to live as equal partners,
              promoting nutrition-sensitive agriculture, and promoting improved
              sanitation practices. A manual developed under the project is
              being used by staff to establish over 300 nutrition multipliers in
              the communities who implement preventive health educational
              activities.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 7: Scaled up Women in Governance Networking in the three
              Eastern Districts.
            </h2>
            <p className={styles.paragraph3}>
              Programming activities to empower women in governance were
              extended to Kono and Kenema districts to strengthen women’s
              participation in the 2018 General Election. The Power to Women
              Project operates in three districts in which over 11,222 men and
              women including 375 persons with disability were mobilized through
              training on leadership, gender-based violence, voter education and
              the Three Gender Acts. Women groups in Kono and Kenema formed
              Women in Governance Networks which prepared the Eastern Women’s
              Manifesto for 2018. Notable achievements in 2018 were that 26
              women were elected as district councillors and four as Members of
              Parliament in the three districts, that Kenema increased the
              number of women councillors from 8 in 2012 to 11 in 2018 and that
              Kailahun elected its first independent woman Member of Parliament.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 8: Improved Accountability for GBV in Schools in Kailahun
              Districts.
            </h2>
            <p className={styles.paragraph3}>
              Supported by Christian Aid and Amplified Change, the Kailahun
              District Gender-Based Violence (GBV) Eradication in School Project
              became operational in 52 schools and was implemented in
              partnership with 12 women councillors elected in 2012 to promote
              GBV-free schools. Activities include establishing girls’ clubs in
              each school to promote anti-GBV education and GBV monitoring teams
              to collect, verify and document evidence on instances of GBV in
              the schools. GBV monitoring reports are presented to the Ward
              Development Committees’ GBV Accountability Forum, ensuring that
              action is taken against perpetrators.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 9: Strengthening Accountability and Building Inclusion
              (SABI) for improved service delivery.
            </h2>
            <p className={styles.paragraph3}>
              Thirty WDCs and 40 community-based development groups in 15
              chiefdoms using SEND’s PM&E are successfully claiming development
              support from the Kailahun, Kenema, Kono and Freetown councils.
              This project is funded by DFID and implemented by a national
              consortium led by Christian Aid. SABI’s noticeable achievements
              include elders in one ward enforcing bye-laws and promoting
              community sensitization on the importance of antenatal care, which
              has increased the number of women using such services. In
              addition, SEND has operationalized different complaint and
              response mechanisms to increase accountability for the delivery of
              social services. For example, at some health facilities and
              schools, complaint boxes have been installed and citizens are
              encouraged to drop in notes with their concerns. These are
              reviewed by the SABI team and passed on to the appropriate service
              providers for redressing.
            </p>
            <h2 className={`${styles.heading4} text-black text-left`}>
              Result 10: Education support for Ebola Orphan and Vulnerable
              Children in Kailahun.
            </h2>
            <p className={styles.paragraph3}>
              The Kailahun Changing Lives Centre was established in 2017 and is
              being sponsored by TerraTech Kindehilfswerk Global Care Germany to
              address the educational and psychological needs of 40 vulnerable
              children, the majority of whom were Ebola orphans. Key services
              provided include paying school fees and providing school bags and
              books, weekly tutorials by volunteer teachers, counselling
              services, sports and drama programmes. SEND staff in Ghana and
              Sierra Leone, helped by Friends of SEND in Canada, have also
              adopted five Ebola orphan girls to finance their education. SEND
              staff volunteered to give a percentage of their salaries to cover
              accommodation, school fees, health bills, and clothing for the
              orphans. These 10 results are only highlights of many of SEND’s
              achievements in Sierra Leone that shape the Strategic Directions
              for this Strategic Plan. These experiences, along with the
              technical skills and partnership developed with donors and
              beneficiary groups, will be important assets in implementing the
              plan.
            </p>
          </div>
          <div className="hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default SendEvolution;
