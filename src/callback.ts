

const callbacks = () => {
    function doHomework(subject: string,callFinishedHomework:()=>void ) {
        console.log(`I have started my ${subject} homewrok.`);
        callFinishedHomework();

    }
    function finishedHomework() {
        console.log("I have finished homewrok")
    }

    doHomework('math', finishedHomework);
}

export default callbacks;