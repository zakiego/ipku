use exitfailure::ExitFailure;
use serde_derive::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct API {
    ip: String,
    country: String,
    city: String,
    region: String,
    longitude: String,
    latitude: String,
}

impl API {
    async fn get() -> Result<Self, ExitFailure> {
        let url = "https://ipku.vercel.app/api";
        let res = reqwest::get(url).await?.json::<API>().await?;

        Ok(res)
    }
}

#[tokio::main]
async fn main() -> Result<(), ExitFailure> {
    let res = API::get().await?;

    println!("IP        : {}", res.ip);
    println!("City      : {}", res.city);
    println!("Region    : {}", res.region);
    println!("Country   : {}", res.country);
    println!("Longitude : {}", res.longitude);
    println!("Latitude  : {}", res.latitude);

    Ok(())
}
