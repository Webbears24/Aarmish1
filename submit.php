<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Connecting... Instant Contact</title>

</head>
<body><!-- End header area -->   
<p>Connecting... </p>
<?PHP
	if (isset($_POST["submit"]))
	{
		$email    = $_POST["email"];
		$contact   = $_POST["contact"];
		$message = $_POST["message"];
		$subject  = "Enquiry From: ".$_POST["email"]. " through Website";
		$bcc      = 'beingyadav786@gmail.com';
		
		$headers  = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
		$headers .= "Bcc: ".$bcc. "\r\n";
		$headers .= "Enquiry From: ".$_POST["email"]. " through SEO <br /><br />";
	
		$message = "<b>Name:</b> ".$_POST["name"]."<br /><br /><b>Email:</b> ".$_POST["email"]."<br /><br /> <b>Contact contact:</b> ".$_POST["contact"]." <br /><br /> ".$_POST["message"]." <br /> Please call back to discuss regarding the products and services of Aarmish";
		
		if (!isset($_POST["email"]) || !isset($_POST["contact"]))
		{
			echo "Please properly fill the contact form";
			//echo "<meta http-equiv='refresh' content='1; url=http://www.aarmish.com/'>";
		}	
		else 
		{
			mail('arvindmishra@aarmish.com', $subject, $message, $headers); 
			echo "Thank you. We will contact back you soon...";
			echo "<meta http-equiv='refresh' content='1; url=http://www.aarmish.com/'>";
	    }
	}		
?>                

  </body>
</html>