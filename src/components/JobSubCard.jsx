import Typography from '@mui/material/Typography';


const JobSubCard = (props) => {
  return (
    <div style={{ display: 'flex', maxWidth: 400, margin: '5px ' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305"
      alt="Logo"
      style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 16 }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
      <div style={{ padding: '10px' }}>
        <Typography style={{ color:"#808080"}}>WeekDay</Typography>
        <p style={{ marginBottom: 0 ,marginTop:"-2px" }}>{props.jobRole}</p>
        <p style={{ marginBottom: 0,marginTop:"-1px"}}>{props.location}</p>
      </div>
    </div>
  </div>
</div>

  
  )
}

export default JobSubCard