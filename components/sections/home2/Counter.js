import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>
            <section className="counter-area-two">
                <div className="container">
                    <div className="counter-item-wrap">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={100} />+</h2>
                                    <p>Active Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={200} />+</h2>
                                    <p>Project Complete</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={94} />+</h2>
                                    <p>Technology Experts</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={10000} />+</h2>
                                    <p>Services Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
