import {Heading} from "../index";
import './UserDetails.css';

export default function UserDetails(item) {
    const {item: {address: {street, suite, city, zipcode}, phone, website, company: {name, catchPhrase, bs}}} = item;
    return (
        <div className={'details-information'}>
            <Heading title={'Details information'} />
            <div>
                <div className={'user-contacts'}>
                    <h3>Contact information</h3>
                    <ul>
                        <li><b>Phone:</b> {phone}</li>
                        <li><b>WebSite:</b> {website}</li>
                    </ul>
                </div>
                <div className={'user-addressing'}>
                    <h3>
                        Addressing {item.name}
                    </h3>
                    <ul>
                        <li><b>Street:</b> {street}</li>
                        <li><b>Suite:</b> {suite}</li>
                        <li><b>City:</b> {city}</li>
                        <li><b>Zipcode:</b> {zipcode}</li>
                    </ul>
                </div>
                <div className={'user-company'}>
                    <h3>Company</h3>
                    <ul>
                        <li><b>Company Name:</b> {name}</li>
                        <li><b>Catch Phrase:</b> {catchPhrase}</li>
                        <li><b>BS:</b> {bs}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}