

const promises = () => {
    const doHomework: Promise<string> = new Promise((resolve, reject) => {
        console.log('Statrting my Homework');
        setTimeout(() => {
            resolve('Finished my homework')
        }, 5000)

    })

    async function doMyHomewrok() {
        try {
            const result = await doHomework;
        } catch (error: unknown) {
            console.log(error)
        }
    }
}
export default promises;