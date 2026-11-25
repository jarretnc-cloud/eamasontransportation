exports.handler = async (event) => {

  try {

    const applicationData = JSON.parse(event.body);

    const response = await fetch(
      process.env.POWER_AUTOMATE_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(applicationData)
      }
    );

    if (!response.ok) {
      throw new Error("Power Automate Error");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Application Submitted"
      })
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };

  }

};