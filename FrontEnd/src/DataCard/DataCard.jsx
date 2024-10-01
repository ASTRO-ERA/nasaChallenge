import styles from "./DataCard.module.css"

function DataCard(){

    const data=[{id: 1, image: "https://stsci-opo.org/STScI-01J80MK4G9S28JR4NV5FF39DS1.png", h1: "Galaxy GS-NDG-9422 Spectrum", text: "The galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCamThe galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCamThe galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCamThe galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCamThe galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCamThe galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCamThe galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCamThe galaxy GS-NDG-9422 may easily have gone unnoticed. However, what appears as a faint blur in this James Webb Space Telescope NIRCam"},
                {id: 2, image: "https://stsci-opo.org/STScI-01J8J6MVKGXKB8WNDRY58K9PZH.png", h1: "Galaxy GS-NDG-9422 Spectrum (NIRSpec)", text: " This comparison of the data collected by the James Webb Space Telescope with "}
    ]
    
    const dataList=data.map(data => <li key={data.id} className={styles.dataList}>
        <img  src={data.image} alt={data.h1} className={styles.image}></img>
        <div className={styles.list}>
            <h1>{data.h1}</h1>
            <p className={styles.text}>{data.text}</p>
        </div>
    </li>)

    return(
        <ul className={styles.ul}>
            {dataList}
        </ul>
    )
}

export default DataCard