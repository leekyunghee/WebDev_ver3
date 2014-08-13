package team.idess.web.controller;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import team.idess.web.bean.employee.EmployeeBean;
import team.idess.web.service.employee.EmployeeService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class EmployeeController {
	
	private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired
	private EmployeeService employeeService;
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
    @RequestMapping(value="/employee/selectEmployeeList", method=RequestMethod.POST)
    @ResponseBody
    public List<EmployeeBean> selectEmployeeList(@RequestBody EmployeeBean employeeBean) {

        List<EmployeeBean> resultList = new ArrayList<EmployeeBean>();
        
        logger.debug("EmployeeController selectEmployeeList Call");
        logger.debug("\n"+employeeBean);
        
        try {
            resultList = employeeService.selectEmployeeList(employeeBean);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        logger.debug("EmployeeController "+resultList);
        
        return resultList;
        
    }
    @RequestMapping(value="/employee/selectEmployee", method=RequestMethod.POST)
    @ResponseBody
    public EmployeeBean selectEmployee(@RequestBody EmployeeBean employeeBean) {

        List<EmployeeBean> resultList = new ArrayList<EmployeeBean>();
        
        logger.debug("EmployeeController selectEmployee Call");
        logger.debug("\n"+employeeBean);
        
        try {
            resultList = employeeService.selectEmployeeList(employeeBean);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        logger.debug("EmployeeController "+resultList);
        
        return resultList.size() == 0 ? new EmployeeBean() : resultList.get(0);
        
    }
	@RequestMapping(value="/employee/addEmployee", method=RequestMethod.POST)
	@ResponseBody
	public void addEmployee(@RequestBody EmployeeBean employeeBean) {

		logger.debug("EmployeeController addEmployee Call");
		logger.debug("EmployeeController "+employeeBean);
		
		Integer resultCount = 0;
		try {
			resultCount = employeeService.addEmployee(employeeBean);
		
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		logger.debug("EmployeeController resultCount["+resultCount+"]");
		
	}
	
	@RequestMapping(value="/employee/editEmployee", method=RequestMethod.POST)
	@ResponseBody
	public Integer editEmployee(@RequestBody EmployeeBean employeeBean) {

		logger.debug("EmployeeController editEmployee Call");
		logger.debug("EmployeeController "+employeeBean);
		
		Integer resultCount = 0;
		try {
			resultCount = employeeService.editEmployee(employeeBean);
		
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		logger.debug("EmployeeController resultCount["+resultCount+"]");
		return resultCount;
		
	}
	
	@RequestMapping(value="/employee/deleteEmployee", method=RequestMethod.POST)
	@ResponseBody
	public void deleteEmployee(@RequestBody EmployeeBean employeeBean) {

		logger.debug("EmployeeController deleteEmployee Call");
		logger.debug("EmployeeController "+employeeBean);
		
		Integer resultCount = 0;
		try {
			resultCount = employeeService.deleteEmployee(employeeBean);
		
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		logger.debug("EmployeeController resultCount["+resultCount+"]");
		
	}
}
