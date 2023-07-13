const { Document, View, Page, Text, Image } = require("@react-pdf/renderer");

const Print = ({ data }) => (
  <Document>
    <Page>
      <View
        style={{
          padding: 42,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <Image
            src="https://res.cloudinary.com/ds73yosji/image/upload/v1683558072/alec_tg5b1s.png"
            style={{
              width: 60,
              height: 60,
            }}
          />
          <View
            style={{
              marginTop: 16,
              fontWeight: 600,
              fontSize: 26,
            }}
          >
            <Text>Axle Load Calculation</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 24,
            fontSize: 16,
          }}
        >
          <Text>Dimensi</Text>
          <Text>Panjang : {data?.length}</Text>
          <Text>Lebar : {data?.width}</Text>
          <Text>Tinggi : {data?.height}</Text>
          <Text>Wheelbase : {data?.wheelbase}</Text>
        </View>
        <View
          style={{
            marginTop: 24,
            fontSize: 16,
          }}
        >
          <Text>Berat</Text>
          <Text>Berat total : {data?.weight}</Text>
          <Text>Berat kendaraan : {data?.vehicle}</Text>
        </View>
        <View
          style={{
            marginTop: 24,
            fontSize: 16,
          }}
        >
          <Text>Muatan sumbu terberat : {data?.heaviestAxisLoad}</Text>
          <Text>Kelas jalan : {data?.roadClass}</Text>
          <Text>Daya angkut : {data?.payload}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Print;
